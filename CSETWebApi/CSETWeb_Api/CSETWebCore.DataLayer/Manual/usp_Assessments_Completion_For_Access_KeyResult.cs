﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer.Model
{
    public partial class usp_Assessments_Completion_For_Access_KeyResult
    {
        public int? AssessmentId { get; set; }
        public int? CompletedCount { get; set; }
        public int? TotalMaturityQuestionsCount { get; set; }
        public int? TotalStandardQuestionsCount { get; set; }
        public int? TotalDiagramQuestionsCount { get; set; }
    }
}
