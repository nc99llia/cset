﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    public partial class REPORT_OPTIONS_SELECTION
    {
        [Key]
        public int Assessment_Id { get; set; }
        [Key]
        public int Report_Option_Id { get; set; }
        public bool Is_Selected { get; set; }

        [ForeignKey("Assessment_Id")]
        [InverseProperty("REPORT_OPTIONS_SELECTION")]
        public virtual ASSESSMENTS Assessment { get; set; }
        [ForeignKey("Report_Option_Id")]
        [InverseProperty("REPORT_OPTIONS_SELECTION")]
        public virtual REPORT_OPTIONS Report_Option { get; set; }
    }
}