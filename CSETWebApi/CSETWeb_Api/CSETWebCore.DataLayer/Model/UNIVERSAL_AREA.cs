﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of UNIVERSAL_AREA records
/// </summary>
public partial class UNIVERSAL_AREA
{
    /// <summary>
    /// The Universal Area Name is used to
    /// </summary>
    [Key]
    [StringLength(60)]
    public string Universal_Area_Name { get; set; }

    /// <summary>
    /// The Area Weight is used to
    /// </summary>
    public double? Area_Weight { get; set; }

    /// <summary>
    /// The Comments is used to
    /// </summary>
    [StringLength(2000)]
    public string Comments { get; set; }

    /// <summary>
    /// The Universal Area Number is used to
    /// </summary>
    public int Universal_Area_Number { get; set; }
}