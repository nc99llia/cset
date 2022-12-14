﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    /// <summary>
    /// A collection of ASSESSMENTS records
    /// </summary>
    public partial class ASSESSMENTS
    {
        public ASSESSMENTS()
        {
            ACCESS_KEY_ASSESSMENT = new HashSet<ACCESS_KEY_ASSESSMENT>();
            AGGREGATION_ASSESSMENT = new HashSet<AGGREGATION_ASSESSMENT>();
            ANSWER = new HashSet<ANSWER>();
            ANSWER_PROFILE = new HashSet<ANSWER_PROFILE>();
            ASSESSMENTS_REQUIRED_DOCUMENTATION = new HashSet<ASSESSMENTS_REQUIRED_DOCUMENTATION>();
            ASSESSMENT_CONTACTS = new HashSet<ASSESSMENT_CONTACTS>();
            ASSESSMENT_DIAGRAM_COMPONENTS = new HashSet<ASSESSMENT_DIAGRAM_COMPONENTS>();
            ASSESSMENT_IRP = new HashSet<ASSESSMENT_IRP>();
            ASSESSMENT_IRP_HEADER = new HashSet<ASSESSMENT_IRP_HEADER>();
            AVAILABLE_MATURITY_MODELS = new HashSet<AVAILABLE_MATURITY_MODELS>();
            AVAILABLE_STANDARDS = new HashSet<AVAILABLE_STANDARDS>();
            CNSS_CIA_JUSTIFICATIONS = new HashSet<CNSS_CIA_JUSTIFICATIONS>();
            COUNTY_ANSWERS = new HashSet<COUNTY_ANSWERS>();
            DOCUMENT_FILE = new HashSet<DOCUMENT_FILE>();
            FINANCIAL_ASSESSMENT_VALUES = new HashSet<FINANCIAL_ASSESSMENT_VALUES>();
            FINANCIAL_DOMAIN_FILTERS = new HashSet<FINANCIAL_DOMAIN_FILTERS>();
            FINANCIAL_HOURS = new HashSet<FINANCIAL_HOURS>();
            FRAMEWORK_TIER_TYPE_ANSWER = new HashSet<FRAMEWORK_TIER_TYPE_ANSWER>();
            GENERAL_SAL = new HashSet<GENERAL_SAL>();
            MATURITY_DOMAIN_REMARKS = new HashSet<MATURITY_DOMAIN_REMARKS>();
            METRO_ANSWERS = new HashSet<METRO_ANSWERS>();
            NETWORK_WARNINGS = new HashSet<NETWORK_WARNINGS>();
            PARAMETER_ASSESSMENT = new HashSet<PARAMETER_ASSESSMENT>();
            REGION_ANSWERS = new HashSet<REGION_ANSWERS>();
            REPORT_DETAIL_SECTION_SELECTION = new HashSet<REPORT_DETAIL_SECTION_SELECTION>();
            REPORT_OPTIONS_SELECTION = new HashSet<REPORT_OPTIONS_SELECTION>();
            REPORT_STANDARDS_SELECTION = new HashSet<REPORT_STANDARDS_SELECTION>();
            SUB_CATEGORY_ANSWERS = new HashSet<SUB_CATEGORY_ANSWERS>();
        }

        [Key]
        public int Assessment_Id { get; set; }
        public DateTime AssessmentCreatedDate { get; set; }
        public int? AssessmentCreatorId { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        [StringLength(50)]
        public string Alias { get; set; }
        public Guid Assessment_GUID { get; set; }
        public DateTime Assessment_Date { get; set; }
        [StringLength(100)]
        public DateTime AssessmentEffectiveDate { get; set; }
        [StringLength(100)]
        public string CreditUnionName { get; set; }
        [StringLength(100)]
        public string Charter { get; set; }
        [StringLength(100)]
        public string Assets { get; set; }
        public int? IRPTotalOverride { get; set; }
        [StringLength(150)]
        public string IRPTotalOverrideReason { get; set; }
        [Required]
        public bool? MatDetail_targetBandOnly { get; set; }
        [Column(TypeName = "xml")]
        public string Diagram_Markup { get; set; }
        public int LastUsedComponentNumber { get; set; }
        public string Diagram_Image { get; set; }
        public bool AnalyzeDiagram { get; set; }
        public bool UseDiagram { get; set; }
        public bool UseStandard { get; set; }
        public bool UseMaturity { get; set; }
        public DateTime? AssessmentEffectiveDate { get; set; }

        [ForeignKey("AssessmentCreatorId")]
        [InverseProperty("ASSESSMENTS")]
        public virtual USERS AssessmentCreator { get; set; }
        [InverseProperty("Assessment")]
        public virtual CIS_CSI_ORGANIZATION_DEMOGRAPHICS CIS_CSI_ORGANIZATION_DEMOGRAPHICS { get; set; }
        [InverseProperty("Assessment")]
        public virtual CIS_CSI_SERVICE_COMPOSITION CIS_CSI_SERVICE_COMPOSITION { get; set; }
        [InverseProperty("Assessment")]
        public virtual CIS_CSI_SERVICE_DEMOGRAPHICS CIS_CSI_SERVICE_DEMOGRAPHICS { get; set; }
        [InverseProperty("Assessment")]
        public virtual DEMOGRAPHICS DEMOGRAPHICS { get; set; }
        [InverseProperty("Assessment")]
        public virtual DEMOGRAPHIC_ANSWERS DEMOGRAPHIC_ANSWERS { get; set; }
        [InverseProperty("IdNavigation")]
        public virtual INFORMATION INFORMATION { get; set; }
        [InverseProperty("Assessment")]
        public virtual STANDARD_SELECTION STANDARD_SELECTION { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ACCESS_KEY_ASSESSMENT> ACCESS_KEY_ASSESSMENT { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<AGGREGATION_ASSESSMENT> AGGREGATION_ASSESSMENT { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ANSWER> ANSWER { get; set; }
        [InverseProperty("Asessment")]
        public virtual ICollection<ANSWER_PROFILE> ANSWER_PROFILE { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ASSESSMENTS_REQUIRED_DOCUMENTATION> ASSESSMENTS_REQUIRED_DOCUMENTATION { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ASSESSMENT_CONTACTS> ASSESSMENT_CONTACTS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ASSESSMENT_DIAGRAM_COMPONENTS> ASSESSMENT_DIAGRAM_COMPONENTS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<ASSESSMENT_IRP> ASSESSMENT_IRP { get; set; }
        [InverseProperty("ASSESSMENT")]
        public virtual ICollection<ASSESSMENT_IRP_HEADER> ASSESSMENT_IRP_HEADER { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<AVAILABLE_MATURITY_MODELS> AVAILABLE_MATURITY_MODELS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<AVAILABLE_STANDARDS> AVAILABLE_STANDARDS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<CNSS_CIA_JUSTIFICATIONS> CNSS_CIA_JUSTIFICATIONS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<COUNTY_ANSWERS> COUNTY_ANSWERS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<DOCUMENT_FILE> DOCUMENT_FILE { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<FINANCIAL_ASSESSMENT_VALUES> FINANCIAL_ASSESSMENT_VALUES { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<FINANCIAL_DOMAIN_FILTERS> FINANCIAL_DOMAIN_FILTERS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<FINANCIAL_HOURS> FINANCIAL_HOURS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<FRAMEWORK_TIER_TYPE_ANSWER> FRAMEWORK_TIER_TYPE_ANSWER { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<GENERAL_SAL> GENERAL_SAL { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<MATURITY_DOMAIN_REMARKS> MATURITY_DOMAIN_REMARKS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<METRO_ANSWERS> METRO_ANSWERS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<NETWORK_WARNINGS> NETWORK_WARNINGS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<PARAMETER_ASSESSMENT> PARAMETER_ASSESSMENT { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<REGION_ANSWERS> REGION_ANSWERS { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<REPORT_DETAIL_SECTION_SELECTION> REPORT_DETAIL_SECTION_SELECTION { get; set; }
        [InverseProperty("Assessment")]
        public virtual ICollection<REPORT_OPTIONS_SELECTION> REPORT_OPTIONS_SELECTION { get; set; }
        [InverseProperty("Assesment")]
        public virtual ICollection<REPORT_STANDARDS_SELECTION> REPORT_STANDARDS_SELECTION { get; set; }
        [InverseProperty("Assessement")]
        public virtual ICollection<SUB_CATEGORY_ANSWERS> SUB_CATEGORY_ANSWERS { get; set; }
    }
}