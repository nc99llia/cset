﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of GEN_FILE records
/// </summary>
public partial class GEN_FILE
{
    /// <summary>
    /// The Gen File Id is used to
    /// </summary>
    [Key]
    public int Gen_File_Id { get; set; }

    /// <summary>
    /// The File Type Id is used to
    /// </summary>
    [Column(TypeName = "numeric(38, 0)")]
    public decimal? File_Type_Id { get; set; }

    /// <summary>
    /// The File Name is used to
    /// </summary>
    [StringLength(250)]
    public string File_Name { get; set; }

    /// <summary>
    /// The Title is used to
    /// </summary>
    [StringLength(250)]
    public string Title { get; set; }

    /// <summary>
    /// The Name is used to
    /// </summary>
    [StringLength(250)]
    public string Name { get; set; }

    /// <summary>
    /// The File Size is used to
    /// </summary>
    public double? File_Size { get; set; }

    /// <summary>
    /// The Doc Num is used to
    /// </summary>
    [Required]
    [StringLength(50)]
    public string Doc_Num { get; set; }

    /// <summary>
    /// The Comments is used to
    /// </summary>
    [StringLength(500)]
    public string Comments { get; set; }

    /// <summary>
    /// The Description is used to
    /// </summary>
    [StringLength(250)]
    public string Description { get; set; }

    /// <summary>
    /// The Short Name is used to
    /// </summary>
    [Required]
    [StringLength(60)]
    public string Short_Name { get; set; }

    /// <summary>
    /// The Publish Date is used to
    /// </summary>
    [Column(TypeName = "datetime")]
    public DateTime? Publish_Date { get; set; }

    /// <summary>
    /// The Doc Version is used to
    /// </summary>
    [StringLength(50)]
    public string Doc_Version { get; set; }

    /// <summary>
    /// The Summary is used to
    /// </summary>
    [StringLength(2000)]
    public string Summary { get; set; }

    /// <summary>
    /// The Source Type is used to
    /// </summary>
    [StringLength(50)]
    public string Source_Type { get; set; }

    public byte[] Data { get; set; }

    [Required]
    public bool? Is_Uploaded { get; set; }

    [ForeignKey("Doc_Num")]
    [InverseProperty("GEN_FILE")]
    public virtual FILE_REF_KEYS Doc_NumNavigation { get; set; }

    [InverseProperty("Gen_File")]
    public virtual ICollection<FILE_KEYWORDS> FILE_KEYWORDS { get; set; } = new List<FILE_KEYWORDS>();

    [ForeignKey("File_Type_Id")]
    [InverseProperty("GEN_FILE")]
    public virtual FILE_TYPE File_Type { get; set; }

    [InverseProperty("Gen_File")]
    public virtual ICollection<GEN_FILE_LIB_PATH_CORL> GEN_FILE_LIB_PATH_CORL { get; set; } = new List<GEN_FILE_LIB_PATH_CORL>();

    [InverseProperty("Gen_File")]
    public virtual ICollection<MATURITY_REFERENCES> MATURITY_REFERENCES { get; set; } = new List<MATURITY_REFERENCES>();

    [InverseProperty("Gen_File")]
    public virtual ICollection<MATURITY_SOURCE_FILES> MATURITY_SOURCE_FILES { get; set; } = new List<MATURITY_SOURCE_FILES>();

    [InverseProperty("Gen_File")]
    public virtual ICollection<REQUIREMENT_REFERENCES> REQUIREMENT_REFERENCES { get; set; } = new List<REQUIREMENT_REFERENCES>();

    [InverseProperty("Gen_File")]
    public virtual ICollection<REQUIREMENT_SOURCE_FILES> REQUIREMENT_SOURCE_FILES { get; set; } = new List<REQUIREMENT_SOURCE_FILES>();

    [InverseProperty("Gen_File")]
    public virtual ICollection<SET_FILES> SET_FILES { get; set; } = new List<SET_FILES>();
}