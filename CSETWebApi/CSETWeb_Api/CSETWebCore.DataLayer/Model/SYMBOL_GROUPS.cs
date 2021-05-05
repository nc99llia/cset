﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of SYMBOL_GROUPS records
    /// </summary>
    public partial class SYMBOL_GROUPS
    {
        public SYMBOL_GROUPS()
        {
            COMPONENT_SYMBOLS = new HashSet<COMPONENT_SYMBOLS>();
        }

        /// <summary>
        /// The Id is used to
        /// </summary>
        [Key]
        public int Id { get; set; }
        /// <summary>
        /// The Symbol Group Name is used to
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Symbol_Group_Name { get; set; }
        /// <summary>
        /// The Symbol Group Title is used to
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Symbol_Group_Title { get; set; }

        [InverseProperty("Symbol_Group_")]
        public virtual ICollection<COMPONENT_SYMBOLS> COMPONENT_SYMBOLS { get; set; }
    }
}