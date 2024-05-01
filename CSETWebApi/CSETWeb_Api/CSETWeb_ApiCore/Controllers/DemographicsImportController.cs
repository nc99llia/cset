﻿//////////////////////////////// 
// 
//   Copyright 2024 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using CSETWebCore.Business.AssessmentIO.Import;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Helpers;
using CSETWebCore.Interfaces.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;
using Ionic.Zip;
using CSETWebCore.Business.Demographic.Import;

namespace CSETWebCore.Api.Controllers
{
    public class DemographicImportController : ControllerBase
    {
        private ITokenManager _tokenManager;
        private CSETContext _context;
        private IDemographicImportManager _demographicImportManager;

        /// <summary>
        /// Constructor.
        /// </summary>
        /// <param name="token"></param>
        /// <param name="context"></param>
        /// <param name="assessmentUtil"></param>
        public DemographicImportController(ITokenManager token, CSETContext context, IDemographicImportManager demographicImportManager)
        {
            _tokenManager = token;
            _context = context;
            _demographicImportManager = demographicImportManager;
        }


        [HttpPost]
        [Route("api/demographics/import")]
        public async Task<IActionResult> ImportDemographic([FromQuery] int assessmentId)
        {
            // For now only allowing 1 uploaded file
            if (Request.Form.Files.Count > 1)
            {
                return BadRequest("Only a single assessment may be imported at a time.");
            }
         
            var assessmentFile = Request.Form.Files[0];

            var target = new MemoryStream();
            assessmentFile.CopyTo(target);

            try
            {
                await _demographicImportManager.ProcessCSETDemographicImport(target.ToArray(), _tokenManager.GetUserId(), assessmentId, _tokenManager.GetAccessKey(), _context);
            }
            catch (Exception)
            {
                return StatusCode(500, "There was an error processing the uploaded assessment.");
            }

            return Ok(true);
        }

    }

}
