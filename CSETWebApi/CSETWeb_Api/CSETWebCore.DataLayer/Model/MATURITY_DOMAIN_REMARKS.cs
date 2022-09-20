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
    /// A collection of MATURITY_DOMAIN_REMARKS records
    /// </summary>
    public partial class MATURITY_DOMAIN_REMARKS
    {
        [Key]
        public int Grouping_ID { get; set; }
        [Key]
        public int Assessment_Id { get; set; }
        [StringLength(2048)]
        public string DomainRemarks { get; set; }

        [ForeignKey("Assessment_Id")]
        [InverseProperty("MATURITY_DOMAIN_REMARKS")]
        public virtual ASSESSMENTS Assessment { get; set; }
        [ForeignKey("Grouping_ID")]
        [InverseProperty("MATURITY_DOMAIN_REMARKS")]
        public virtual MATURITY_GROUPINGS Grouping { get; set; }
    }
}