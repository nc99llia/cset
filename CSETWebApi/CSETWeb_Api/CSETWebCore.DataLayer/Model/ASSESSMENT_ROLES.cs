﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of ASSESSMENT_ROLES records
    /// </summary>
    public partial class ASSESSMENT_ROLES
    {
        public ASSESSMENT_ROLES()
        {
            ASSESSMENT_CONTACTS = new HashSet<ASSESSMENT_CONTACTS>();
        }

        [Key]
        public int AssessmentRoleId { get; set; }
        [Required]
        [StringLength(50)]
        public string AssessmentRole { get; set; }

        [InverseProperty("AssessmentRole")]
        public virtual ICollection<ASSESSMENT_CONTACTS> ASSESSMENT_CONTACTS { get; set; }
    }
}