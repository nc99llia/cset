﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of CNSS_CIA_TYPES records
    /// </summary>
    public partial class CNSS_CIA_TYPES
    {
        public CNSS_CIA_TYPES()
        {
            CNSS_CIA_JUSTIFICATIONS = new HashSet<CNSS_CIA_JUSTIFICATIONS>();
        }

        [Key]
        [StringLength(50)]
        public string CIA_Type { get; set; }

        [InverseProperty("CIA_TypeNavigation")]
        public virtual ICollection<CNSS_CIA_JUSTIFICATIONS> CNSS_CIA_JUSTIFICATIONS { get; set; }
    }
}