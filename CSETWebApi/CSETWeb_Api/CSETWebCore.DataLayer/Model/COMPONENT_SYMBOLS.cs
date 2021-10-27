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
    /// A collection of COMPONENT_SYMBOLS records
    /// </summary>
    [Index(nameof(File_Name), Name = "IX_COMPONENT_SYMBOLS", IsUnique = true)]
    [Index(nameof(Abbreviation), Name = "IX_COMPONENT_SYMBOLS_1", IsUnique = true)]
    public partial class COMPONENT_SYMBOLS
    {
        public COMPONENT_SYMBOLS()
        {
            ASSESSMENT_DIAGRAM_COMPONENTS = new HashSet<ASSESSMENT_DIAGRAM_COMPONENTS>();
            COMPONENT_NAMES_LEGACY = new HashSet<COMPONENT_NAMES_LEGACY>();
            COMPONENT_QUESTIONS = new HashSet<COMPONENT_QUESTIONS>();
        }

        /// <summary>
        /// The Id is used to
        /// </summary>
        [Key]
        public int Component_Symbol_Id { get; set; }
        /// <summary>
        /// The File Name is used to
        /// </summary>
        [Required]
        [StringLength(100)]
        public string File_Name { get; set; }
        /// <summary>
        /// The Component Family Name is used to
        /// </summary>
        [Required]
        [StringLength(150)]
        public string Component_Family_Name { get; set; }
        /// <summary>
        /// The Symbol Group Id is used to
        /// </summary>
        public int Symbol_Group_Id { get; set; }
        /// <summary>
        /// The Abbreviation is used to
        /// </summary>
        [Required]
        [StringLength(5)]
        public string Abbreviation { get; set; }
        public bool IsService { get; set; }
        [Required]
        [StringLength(100)]
        public string Symbol_Name { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        [StringLength(250)]
        public string Search_Tags { get; set; }
        [StringLength(1000)]
        public string Description { get; set; }

        [ForeignKey(nameof(Component_Family_Name))]
        [InverseProperty(nameof(COMPONENT_FAMILY.COMPONENT_SYMBOLS))]
        public virtual COMPONENT_FAMILY Component_Family_NameNavigation { get; set; }
        [ForeignKey(nameof(Symbol_Group_Id))]
        [InverseProperty(nameof(SYMBOL_GROUPS.COMPONENT_SYMBOLS))]
        public virtual SYMBOL_GROUPS Symbol_Group { get; set; }
        [InverseProperty("Component_Symbol")]
        public virtual ICollection<ASSESSMENT_DIAGRAM_COMPONENTS> ASSESSMENT_DIAGRAM_COMPONENTS { get; set; }
        [InverseProperty("Component_Symbol")]
        public virtual ICollection<COMPONENT_NAMES_LEGACY> COMPONENT_NAMES_LEGACY { get; set; }
        [InverseProperty("Component_Symbol")]
        public virtual ICollection<COMPONENT_QUESTIONS> COMPONENT_QUESTIONS { get; set; }
    }
}