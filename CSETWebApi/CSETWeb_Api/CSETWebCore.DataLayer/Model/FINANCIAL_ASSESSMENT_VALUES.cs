﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of FINANCIAL_ASSESSMENT_VALUES records
/// </summary>
[PrimaryKey("Assessment_Id", "AttributeName")]
public partial class FINANCIAL_ASSESSMENT_VALUES
{
    [Key]
    public int Assessment_Id { get; set; }

    [Key]
    [StringLength(250)]
    public string AttributeName { get; set; }

    [StringLength(50)]
    public string AttributeValue { get; set; }

    [ForeignKey("Assessment_Id")]
    [InverseProperty("FINANCIAL_ASSESSMENT_VALUES")]
    public virtual ASSESSMENTS Assessment { get; set; }

    [ForeignKey("AttributeName")]
    [InverseProperty("FINANCIAL_ASSESSMENT_VALUES")]
    public virtual FINANCIAL_ATTRIBUTES AttributeNameNavigation { get; set; }
}