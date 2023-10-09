﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of FINANCIAL_DOMAIN_FILTERS records
/// </summary>
[PrimaryKey("Assessment_Id", "DomainId")]
public partial class FINANCIAL_DOMAIN_FILTERS
{
    [Key]
    public int Assessment_Id { get; set; }

    [Key]
    public int DomainId { get; set; }

    public bool B { get; set; }

    public bool E { get; set; }

    public bool Int { get; set; }

    public bool A { get; set; }

    public bool Inn { get; set; }

    [ForeignKey("Assessment_Id")]
    [InverseProperty("FINANCIAL_DOMAIN_FILTERS")]
    public virtual ASSESSMENTS Assessment { get; set; }

    [ForeignKey("DomainId")]
    [InverseProperty("FINANCIAL_DOMAIN_FILTERS")]
    public virtual FINANCIAL_DOMAINS Domain { get; set; }
}