//////////////////////////////// 
// 
//   Copyright 2024 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 
using CSETWebCore.Api.Models;
using CSETWebCore.Business.RepositoryLibrary;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Interfaces.Common;
using CSETWebCore.Interfaces.ResourceLibrary;
using CSETWebCore.Model.ResourceLibrary;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;


namespace CSETWebCore.Api.Controllers
{
    [ApiController]
    public class ResourceLibraryController : ControllerBase
    {
        private CSETContext _context;
        private readonly IWebHostEnvironment _environment;
        private readonly IConfiguration _configuration;
        private readonly IHtmlFromXamlConverter _html;
        private readonly IFlowDocManager _flow;

        public ResourceLibraryController(CSETContext context, IWebHostEnvironment environment, IConfiguration configuration, 
            IHtmlFromXamlConverter html, IFlowDocManager flow)
        {
            _context = context;
            _environment = environment;
            _configuration = configuration;
            _html = html;
            _flow = flow;
        }


        /// <summary>
        /// This can find a file in the GEN_FILE table either by
        /// filename or by the file's ID.
        /// 
        /// If binary data is in the [Data] column, that is returned.  
        /// Otherwise a physical file is located and returned.
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("api/library/doc/{fileId}")]
        public IActionResult GetReferenceDocument(string fileId)
        {
            var manager = new ReferenceDocumentManager(_context, _environment, _configuration);
            var fileResp = manager.FindReferenceDocument(fileId);

            if (fileResp == null)
            {
                NLog.LogManager.GetCurrentClassLogger().Warn($"Reference document '{fileId}' was requested but does not exist.");





                // FALLBACK TO CLOUD SERVER
                HttpClient req = new HttpClient();
                var ggg = req.GetAsync($"http://csetac:5780/api/library/doc/{fileId}").Result;
                Console.WriteLine(ggg);

                if (!ggg.IsSuccessStatusCode)
                {
                    return StatusCode((int)ggg.StatusCode);
                }




                return NotFound();
            }

            // In case we want download statistics
            NLog.LogManager.GetCurrentClassLogger().Info($"Reference document '{fileResp.Id}' was downloaded.");


            var contentDisposition = new ContentDispositionHeaderValue("inline");
            contentDisposition.FileName = fileResp.FileName;
            Response.Headers.Append("Content-Disposition", contentDisposition.ToString());

            return File(fileResp.Stream, fileResp.ContentType);
        }


        /// <summary>
        /// Returns the documents that match the specified search term.
        /// </summary>
        /// <param name="searchRequest"></param>
        /// <returns></returns>        
        [HttpPost]
        [Route("api/library/search")]
        public IActionResult GetDetails([FromBody] SearchRequest searchRequest)
        {
            if (String.IsNullOrWhiteSpace(searchRequest.term))
                return Ok(new List<ResourceNode>());

            CSETGlobalProperties props = new CSETGlobalProperties(_context);
            SearchDocs search = new SearchDocs(props, new ResourceLibraryRepository(_context, props));
            return Ok(search.Search(searchRequest));
        }


        /// <summary>
        /// Returns a tree structure containing all of the Resource Library
        /// document metadata.  The tree has multiple categorizations.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/library/tree")]
        public List<SimpleNode> GetTree()
        {
            IResourceLibraryRepository resource = new ResourceLibraryRepository(_context, new CSETGlobalProperties(_context));
            return resource.GetTreeNodes();
        }


        /// <summary>
        /// Returns a FlowDoc (procurement language or recommendations)
        /// converted to HTML.
        /// </summary>
        [HttpGet]
        [Route("api/library/flowdoc")]
        public string GetFlowDoc(string type, int id)
        {
            // pull the flowdoc from the database
            string html = _flow.GetFlowDoc(type, id);

            return html;
        }


        /// <summary>
        /// Returns 'true' if more than 100 physical document files
        /// are available on the file system. 
        /// 
        /// Normally used as a debug endpoint to acertain if the
        /// reference documents have been deployed to the API server.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/library/list")]
        public IActionResult ShowResourceLibrary()
        {
            var refBuilder = new Helpers.ReferencesBuilder(_context);
            var buildDocuments = refBuilder.GetBuildDocuments();
            return Ok(buildDocuments.Count > 100);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("api/HasLocalDocuments")]
        public IActionResult HasLocalDocuments()
        {
            var docPath = Path.Combine((string)AppDomain.CurrentDomain.GetData("ContentRootPath"), "Documents", "cag.pdf");
            if (System.IO.File.Exists(docPath))
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }
    }
}
