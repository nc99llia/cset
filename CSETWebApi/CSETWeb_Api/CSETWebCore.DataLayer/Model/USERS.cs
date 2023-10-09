﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of USERS records
/// </summary>
[Index("PrimaryEmail", Name = "IX_USERS", IsUnique = true)]
public partial class USERS
{
    [Required]
    [StringLength(150)]
    public string PrimaryEmail { get; set; }

    [Key]
    public int UserId { get; set; }

    [StringLength(250)]
    public string Password { get; set; }

    [StringLength(250)]
    public string Salt { get; set; }

    public bool IsSuperUser { get; set; }

    [Required]
    public bool? PasswordResetRequired { get; set; }

    [StringLength(150)]
    public string FirstName { get; set; }

    [StringLength(150)]
    public string LastName { get; set; }

    public Guid? Id { get; set; }

    public int EmailSentCount { get; set; }

    [Required]
    public bool? IsActive { get; set; }

    [Required]
    public bool? PreventEncrypt { get; set; }

    public bool CisaAssessorWorkflow { get; set; }

    [Required]
    [StringLength(10)]
    public string Lang { get; set; }

    [InverseProperty("AssessmentCreator")]
    public virtual ICollection<ASSESSMENTS> ASSESSMENTS { get; set; } = new List<ASSESSMENTS>();

    [InverseProperty("User")]
    public virtual ICollection<ASSESSMENT_CONTACTS> ASSESSMENT_CONTACTS { get; set; } = new List<ASSESSMENT_CONTACTS>();

    [InverseProperty("User")]
    public virtual ICollection<PASSWORD_HISTORY> PASSWORD_HISTORY { get; set; } = new List<PASSWORD_HISTORY>();

    [InverseProperty("User")]
    public virtual ICollection<USER_EMAIL_HISTORY> USER_EMAIL_HISTORY { get; set; } = new List<USER_EMAIL_HISTORY>();

    [InverseProperty("User")]
    public virtual USER_SECURITY_QUESTIONS USER_SECURITY_QUESTIONS { get; set; }
}