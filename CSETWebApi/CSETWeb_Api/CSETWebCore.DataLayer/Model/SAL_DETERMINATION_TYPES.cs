﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of SAL_DETERMINATION_TYPES records
    /// </summary>
    public partial class SAL_DETERMINATION_TYPES
    {
        public SAL_DETERMINATION_TYPES()
        {
            STANDARD_SELECTION = new HashSet<STANDARD_SELECTION>();
        }

        [Key]
        [StringLength(50)]
        public string Sal_Determination_Type { get; set; }

        [InverseProperty("Last_Sal_Determination_TypeNavigation")]
        public virtual ICollection<STANDARD_SELECTION> STANDARD_SELECTION { get; set; }
    }
}