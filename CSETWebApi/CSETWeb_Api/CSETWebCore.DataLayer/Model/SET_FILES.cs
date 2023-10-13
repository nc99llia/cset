﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of SET_FILES records
/// </summary>
[PrimaryKey("SetName", "Gen_File_Id")]
public partial class SET_FILES
{
    [Key]
    [StringLength(50)]
    public string SetName { get; set; }

    [Key]
    public int Gen_File_Id { get; set; }

    [StringLength(50)]
    public string Comment { get; set; }

    [ForeignKey("Gen_File_Id")]
    [InverseProperty("SET_FILES")]
    public virtual GEN_FILE Gen_File { get; set; }

    [ForeignKey("SetName")]
    [InverseProperty("SET_FILES")]
    public virtual SETS SetNameNavigation { get; set; }
}