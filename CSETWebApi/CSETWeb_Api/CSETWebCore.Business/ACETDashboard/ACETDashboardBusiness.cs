﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Interfaces.ACETDashboard;
using CSETWebCore.Interfaces.AdminTab;
using CSETWebCore.Interfaces.Helpers;
using CSETWebCore.Interfaces.Maturity;
using CSETWebCore.Model.Acet;
using CSETWebCore.Model.Maturity;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.Business.ACETDashboard
{
    public class ACETDashboardBusiness : IACETDashboardBusiness
    {
        private CSETContext _context;
        private IAssessmentUtil _assessmentUtil;
        private IMaturityBusiness _maturity;
        private IAdminTabBusiness _adminTab;

        public ACETDashboardBusiness(CSETContext context, IAssessmentUtil assessmentUtil, IMaturityBusiness maturity, IAdminTabBusiness adminTab)
        {
            _context = context;
            _assessmentUtil = assessmentUtil;
            _maturity = maturity;
            _adminTab = adminTab;
        }


        /// <summary>
        /// Get IRP calculations and domains for dashboard display
        /// </summary>
        /// <param name="assessmentId"></param>
        /// <returns></returns>
        public async Task<Model.Acet.ACETDashboard> LoadDashboard(int assessmentId)
        {
            var result = await GetIrpCalculation(assessmentId);

            result.Domains = new List<DashboardDomain>();

            List<MaturityDomain> domains = await _maturity.GetMaturityAnswers(assessmentId);
            foreach (var d in domains)
            {
                result.Domains.Add(new DashboardDomain
                {
                    Maturity = d.DomainMaturity,
                    Name = d.DomainName
                });

            }

            return result;
        }


        /// <summary>
        /// Get the string value for the overall IRP mapping
        /// </summary>
        /// <param name="assessmentId"></param>
        /// <returns></returns>
        public async Task<string> GetOverallIrp(int assessmentId)
        {
            var calc = await GetIrpCalculation(assessmentId);
            int overall = calc.Override > 0 ? calc.Override : calc.SumRiskLevel;
            return overall == 1 ? Constants.Constants.LeastIrp :
                overall == 2 ? Constants.Constants.MinimalIrp :
                overall == 3 ? Constants.Constants.ModerateIrp :
                overall == 4 ? Constants.Constants.SignificantIrp :
                overall == 5 ? Constants.Constants.MostIrp : string.Empty;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="assessmentId"></param>
        /// <returns></returns>
        public async Task<int> GetOverallIrpNumber(int assessmentId)
        {
            var calc = await GetIrpCalculation(assessmentId);
            int overall = calc.Override > 0 ? calc.Override : calc.SumRiskLevel;
            return overall;
        }


        /// <summary>
        /// Get all IRP calculations for display
        /// </summary>
        /// <param name="assessmentId"></param>
        /// <returns></returns>
        public async Task<Model.Acet.ACETDashboard> GetIrpCalculation(int assessmentId)
        {
            Model.Acet.ACETDashboard result = new Model.Acet.ACETDashboard();
            
           
            // now just properties on an Assessment
            ASSESSMENTS assessment = await _context.ASSESSMENTS.FirstOrDefaultAsync(a => a.Assessment_Id == assessmentId);
            if (assessment == null) { return null; }
            result.CreditUnionName = assessment.CreditUnionName;
            result.Charter = assessment.Charter;
            result.Assets = assessment.Assets;
            var tabData = await _adminTab.GetTabData(assessmentId);
            result.Hours = tabData.GrandTotal;

            //IRP Section
            result.Override = assessment.IRPTotalOverride ?? 0;
            result.OverrideReason = assessment.IRPTotalOverrideReason;
            foreach (IRP_HEADER header in _context.IRP_HEADER)
            {
                IRPSummary summary = new IRPSummary();
                summary.HeaderText = header.Header;

                ASSESSMENT_IRP_HEADER headerInfo = await _context.ASSESSMENT_IRP_HEADER.FirstOrDefaultAsync(h => h.IRP_HEADER.IRP_Header_Id == header.IRP_Header_Id && h.ASSESSMENT.Assessment_Id == assessmentId);
                if (headerInfo != null)
                {
                    summary.RiskLevelId = headerInfo.HEADER_RISK_LEVEL_ID ?? 0;
                    summary.RiskLevel = headerInfo.RISK_LEVEL.Value;
                    summary.Comment = headerInfo.COMMENT;
                }

                List<DataLayer.Model.IRP> irps = await _context.IRP.Where(i => i.Header_Id == header.IRP_Header_Id).ToListAsync();
                Dictionary<int, ASSESSMENT_IRP> dictionaryIRPS = await _context.ASSESSMENT_IRP.Where(x => x.Assessment_Id == assessmentId).ToDictionaryAsync(x => x.IRP_Id, x => x);
                foreach (DataLayer.Model.IRP irp in irps)
                {
                    ASSESSMENT_IRP answer = null;
                    dictionaryIRPS.TryGetValue(irp.IRP_ID, out answer);
                    //ASSESSMENT_IRP answer = irp.ASSESSMENT_IRP.FirstOrDefault(i => i.Assessment_.Assessment_Id == assessmentId);
                    if (answer != null && answer.Response != 0)
                    {
                        summary.RiskCount[answer.Response.Value - 1]++;
                        summary.RiskSum++;
                        result.SumRisk[answer.Response.Value - 1]++;
                        result.SumRiskTotal++;
                    }
                }

                result.Irps.Add(summary);
            }

            //go back through the IRPs and calculate the Risk Level for each section
            foreach (IRPSummary irp in result.Irps)
            {
                int MaxRisk = 0;
                irp.RiskLevel = 0;
                for (int i = 0; i < irp.RiskCount.Length; i++)
                {
                    if (irp.RiskCount[i] >= MaxRisk && irp.RiskCount[i] > 0)
                    {
                        MaxRisk = irp.RiskCount[i];
                        irp.RiskLevel = i + 1;
                    }
                }
            }

            await _context.SaveChangesAsync();

            result.SumRiskLevel = 1;
            int maxRisk = 0;
            for (int i = 0; i < result.SumRisk.Length; i++)
            {
                if (result.SumRisk[i] >= maxRisk && result.SumRisk[i] > 0)
                {
                    result.SumRiskLevel = i + 1;
                    maxRisk = result.SumRisk[i];
                }
            }

            // If no override, use calculated IRP; Storing IRP as maturity level
            if (result.Override == 0)
            {
                await _maturity.PersistMaturityLevel(assessmentId, result.SumRiskLevel);
            }
            else 
            {
                await _maturity.PersistMaturityLevel(assessmentId, result.Override);
            }

            return result;
        }

        public async Task UpdateACETDashboardSummary(int assessmentId, Model.Acet.ACETDashboard summary)
        {
            if (assessmentId == 0 || summary == null) { return; }

            ASSESSMENTS assessment = await _context.ASSESSMENTS.FirstOrDefaultAsync(a => a.Assessment_Id == assessmentId);
            if (assessment != null)
            {
                assessment.CreditUnionName = summary.CreditUnionName;
                assessment.Charter = summary.Charter;
                assessment.Assets = summary.Assets;

                assessment.IRPTotalOverride = summary.Override;
                assessment.IRPTotalOverrideReason = summary.OverrideReason;
            }

            foreach (IRPSummary irp in summary.Irps)
            {
                ASSESSMENT_IRP_HEADER dbSummary = await _context.ASSESSMENT_IRP_HEADER.FirstOrDefaultAsync(s => s.ASSESSMENT_ID == assessment.Assessment_Id && s.HEADER_RISK_LEVEL_ID == irp.RiskLevelId);
                if (dbSummary != null)
                {
                    dbSummary.RISK_LEVEL = irp.RiskLevel;
                    dbSummary.COMMENT = irp.Comment;
                } // the else should never happen
                else
                {
                    return;
                }
            }

            await _context.SaveChangesAsync();

            await _assessmentUtil.TouchAssessment(assessmentId);
        }
    }
}