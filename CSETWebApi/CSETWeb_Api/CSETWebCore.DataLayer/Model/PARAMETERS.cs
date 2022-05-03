﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    /// <summary>
    /// A collection of PARAMETERS records
    /// </summary>
    [Index("Parameter_Name", Name = "IX_Parameters", IsUnique = true)]
    public partial class PARAMETERS
    {
        public PARAMETERS()
        {
            PARAMETER_ASSESSMENT = new HashSet<PARAMETER_ASSESSMENT>();
            PARAMETER_REQUIREMENTS = new HashSet<PARAMETER_REQUIREMENTS>();
            PARAMETER_VALUES = new HashSet<PARAMETER_VALUES>();
        }

        [Key]
        public int Parameter_ID { get; set; }
        [Required]
        [StringLength(500)]
        [Unicode(false)]
        public string Parameter_Name { get; set; }

        [InverseProperty("Parameter")]
        public virtual ICollection<PARAMETER_ASSESSMENT> PARAMETER_ASSESSMENT { get; set; }
        [InverseProperty("Parameter")]
        public virtual ICollection<PARAMETER_REQUIREMENTS> PARAMETER_REQUIREMENTS { get; set; }
        [InverseProperty("Parameter")]
        public virtual ICollection<PARAMETER_VALUES> PARAMETER_VALUES { get; set; }
    }
}