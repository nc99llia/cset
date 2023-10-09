﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of PARAMETER_REQUIREMENTS records
/// </summary>
[PrimaryKey("Requirement_Id", "Parameter_Id")]
public partial class PARAMETER_REQUIREMENTS
{
    [Key]
    public int Requirement_Id { get; set; }

    [Key]
    public int Parameter_Id { get; set; }

    public int? ID { get; set; }

    [ForeignKey("Parameter_Id")]
    [InverseProperty("PARAMETER_REQUIREMENTS")]
    public virtual PARAMETERS Parameter { get; set; }

    [ForeignKey("Requirement_Id")]
    [InverseProperty("PARAMETER_REQUIREMENTS")]
    public virtual NEW_REQUIREMENT Requirement { get; set; }
}