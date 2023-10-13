﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of REQUIREMENT_QUESTIONS_SETS records
/// </summary>
[PrimaryKey("Question_Id", "Set_Name")]
public partial class REQUIREMENT_QUESTIONS_SETS
{
    [Key]
    public int Question_Id { get; set; }

    public int Requirement_Id { get; set; }

    [Key]
    [StringLength(50)]
    public string Set_Name { get; set; }

    [ForeignKey("Question_Id")]
    [InverseProperty("REQUIREMENT_QUESTIONS_SETS")]
    public virtual NEW_QUESTION Question { get; set; }

    [ForeignKey("Requirement_Id")]
    [InverseProperty("REQUIREMENT_QUESTIONS_SETS")]
    public virtual NEW_REQUIREMENT Requirement { get; set; }

    [ForeignKey("Set_Name")]
    [InverseProperty("REQUIREMENT_QUESTIONS_SETS")]
    public virtual SETS Set_NameNavigation { get; set; }
}