﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using CSETWeb_Api.BusinessManagers;
using CSETWeb_Api.Helpers;
using DataLayerCore.Model;
using Microsoft.AspNetCore.Authorization;
using CSETWebCore.Interfaces.Assessment;
using CSETWebCore.Interfaces.Helpers;
using CSETWebCore.Model.Assessment;

namespace CSETWeb_ApiCore.Api.Controllers
{
    [ApiController]
    [Authorize]
    public class AssessmentController : ControllerBase
    {
        private readonly IAssessmentBusiness _assessmentBusiness;
        private readonly IAuthentication _authentication;
        private readonly ITransactionSecurity _transactionSecurity;

        public AssessmentController(IAssessmentBusiness assessmentBusiness, IAuthentication authentication,
            ITransactionSecurity transactionSecurity)
        {
            _assessmentBusiness = assessmentBusiness;
            _authentication = authentication;
            _transactionSecurity = transactionSecurity;
        }

        /// <summary>
        /// Creates a new Assessment with the current user as the first contact
        /// in an admin role.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/createassessment")]
        public IActionResult CreateAssessment(bool mode)
        {
            int currentuserId = _authentication.GetUserId();
            return Ok(_assessmentBusiness.CreateNewAssessment(currentuserId, mode));
        }

        /// <summary>
        /// Returns an array of Assessments connected to the current user.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/assessmentsforuser")]
        public IEnumerable<Assessments_For_User> GetMyAssessments()
        {
            // get all Assessments that the current user is associated with
            return _assessmentBusiness.GetAssessmentsForUser(_transactionSecurity.GetCurrentUserId());
        }

        /// <summary>
        /// Returns the AssessmentDetail for current Assessment defined in the security token.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/assessmentdetail")]
        public AssessmentDetail Get()
        {
            // Get the AssessmentId from the token
            int assessmentId = _authentication.AssessmentForUser();

            return _assessmentBusiness.GetAssessmentDetail(assessmentId);
        }

        /// <summary>
        /// Persists the posted AssessmentDetail.
        /// </summary>
        /// <param name="assessmentDetail"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("api/assessmentdetail")]
        public int Post([FromBody] AssessmentDetail assessmentDetail)
        {
            // validate the assessment for the user
            int assessmentId = Auth.AssessmentForUser();
            if (assessmentId != assessmentDetail.Id)
            {
                throw new CSETApplicationException("Not currently authorized to update the Assessment", null);
            }

            return _assessmentBusiness.SaveAssessmentDetail(assessmentId, assessmentDetail);
        }

        /// <summary>
        /// Returns a collection of all documents attached to any question in the Assessment.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/assessmentdocuments")]
        public object GetDocumentsForAssessment()
        {
            int assessmentId = Auth.AssessmentForUser();

            DocumentManager dm = new DocumentManager(assessmentId);
            return dm.GetDocumentsForAssessment(assessmentId);
        }
    }
}
