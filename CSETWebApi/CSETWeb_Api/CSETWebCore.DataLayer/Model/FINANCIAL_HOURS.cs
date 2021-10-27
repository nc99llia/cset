﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CSETWebCore.DataLayer.Model
{
    /// <summary>
    /// A collection of FINANCIAL_HOURS records
    /// </summary>
    public partial class FINANCIAL_HOURS
    {
        [Key]
        public int Assessment_Id { get; set; }
        [Key]
        [StringLength(50)]
        public string Component { get; set; }
        [Key]
        [StringLength(50)]
        public string ReviewType { get; set; }
        [Column(TypeName = "decimal(9, 2)")]
        public decimal Hours { get; set; }
        [StringLength(512)]
        public string OtherSpecifyValue { get; set; }

        [ForeignKey(nameof(Assessment_Id))]
        [InverseProperty(nameof(ASSESSMENTS.FINANCIAL_HOURS))]
        public virtual ASSESSMENTS Assessment { get; set; }
        [ForeignKey(nameof(Component))]
        [InverseProperty(nameof(FINANCIAL_HOURS_COMPONENT.FINANCIAL_HOURS))]
        public virtual FINANCIAL_HOURS_COMPONENT ComponentNavigation { get; set; }
        [ForeignKey(nameof(ReviewType))]
        [InverseProperty(nameof(FINANCIAL_REVIEWTYPE.FINANCIAL_HOURS))]
        public virtual FINANCIAL_REVIEWTYPE ReviewTypeNavigation { get; set; }
    }
}