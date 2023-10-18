﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

[PrimaryKey("Mat_Question_Id", "PropertyName")]
public partial class MATURITY_QUESTION_PROPS
{
    [Key]
    public int Mat_Question_Id { get; set; }

    [Key]
    [StringLength(20)]
    [Unicode(false)]
    public string PropertyName { get; set; }

    [Required]
    [StringLength(500)]
    [Unicode(false)]
    public string PropertyValue { get; set; }

    [ForeignKey("Mat_Question_Id")]
    [InverseProperty("MATURITY_QUESTION_PROPS")]
    public virtual MATURITY_QUESTIONS Mat_Question { get; set; }
}