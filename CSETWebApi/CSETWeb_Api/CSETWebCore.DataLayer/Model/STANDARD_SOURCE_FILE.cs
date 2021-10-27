﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CSETWebCore.DataLayer.Model
{
    /// <summary>
    /// A collection of STANDARD_SOURCE_FILE records
    /// </summary>
    public partial class STANDARD_SOURCE_FILE
    {
        /// <summary>
        /// The Set Name is used to
        /// </summary>
        [Key]
        [StringLength(50)]
        public string Set_Name { get; set; }
        /// <summary>
        /// The Doc Num is used to
        /// </summary>
        [Key]
        [StringLength(40)]
        public string Doc_Num { get; set; }

        [ForeignKey(nameof(Doc_Num))]
        [InverseProperty(nameof(FILE_REF_KEYS.STANDARD_SOURCE_FILE))]
        public virtual FILE_REF_KEYS Doc_NumNavigation { get; set; }
        [ForeignKey(nameof(Set_Name))]
        [InverseProperty(nameof(SETS.STANDARD_SOURCE_FILE))]
        public virtual SETS Set_NameNavigation { get; set; }
    }
}