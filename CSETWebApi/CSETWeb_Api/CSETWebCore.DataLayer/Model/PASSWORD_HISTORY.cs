﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

[PrimaryKey("UserId", "Created")]
public partial class PASSWORD_HISTORY
{
    [Key]
    public int UserId { get; set; }

    [Key]
    [Column(TypeName = "datetime")]
    public DateTime Created { get; set; }

    [Required]
    [StringLength(250)]
    public string Password { get; set; }

    [Required]
    [StringLength(250)]
    public string Salt { get; set; }

    public bool Is_Temp { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("PASSWORD_HISTORY")]
    public virtual USERS User { get; set; }
}