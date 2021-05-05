﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of NERC_RISK_RANKING records
    /// </summary>
    public partial class NERC_RISK_RANKING
    {
        public int? Question_id { get; set; }
        public int? Requirement_Id { get; set; }
        [Key]
        public int Compliance_Risk_Rank { get; set; }
        [Required]
        [StringLength(50)]
        public string Violation_Risk_Factor { get; set; }

        [ForeignKey(nameof(Question_id))]
        [InverseProperty(nameof(NEW_QUESTION.NERC_RISK_RANKING))]
        public virtual NEW_QUESTION Question_ { get; set; }
        [ForeignKey(nameof(Requirement_Id))]
        [InverseProperty(nameof(NEW_REQUIREMENT.NERC_RISK_RANKING))]
        public virtual NEW_REQUIREMENT Requirement_ { get; set; }
    }
}