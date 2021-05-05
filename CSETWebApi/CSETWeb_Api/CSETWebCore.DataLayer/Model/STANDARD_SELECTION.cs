﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of STANDARD_SELECTION records
    /// </summary>
    public partial class STANDARD_SELECTION
    {
        public STANDARD_SELECTION()
        {
            ASSESSMENT_SELECTED_LEVELS = new HashSet<ASSESSMENT_SELECTED_LEVELS>();
            NIST_SAL_INFO_TYPES = new HashSet<NIST_SAL_INFO_TYPES>();
            NIST_SAL_QUESTION_ANSWERS = new HashSet<NIST_SAL_QUESTION_ANSWERS>();
        }

        /// <summary>
        /// The Id is used to
        /// </summary>
        [Key]
        public int Assessment_Id { get; set; }
        /// <summary>
        /// The Application Mode is used to
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Application_Mode { get; set; }
        /// <summary>
        /// The Selected Sal Level is used to
        /// </summary>
        [Required]
        [StringLength(10)]
        public string Selected_Sal_Level { get; set; }
        [StringLength(50)]
        public string Last_Sal_Determination_Type { get; set; }
        [StringLength(50)]
        public string Sort_Set_Name { get; set; }
        public bool Is_Advanced { get; set; }

        [ForeignKey(nameof(Assessment_Id))]
        [InverseProperty(nameof(ASSESSMENTS.STANDARD_SELECTION))]
        public virtual ASSESSMENTS Assessment_ { get; set; }
        [ForeignKey(nameof(Last_Sal_Determination_Type))]
        [InverseProperty(nameof(SAL_DETERMINATION_TYPES.STANDARD_SELECTION))]
        public virtual SAL_DETERMINATION_TYPES Last_Sal_Determination_TypeNavigation { get; set; }
        public virtual UNIVERSAL_SAL_LEVEL Selected_Sal_LevelNavigation { get; set; }
        [InverseProperty("Assessment_")]
        public virtual ICollection<ASSESSMENT_SELECTED_LEVELS> ASSESSMENT_SELECTED_LEVELS { get; set; }
        [InverseProperty("Assessment_")]
        public virtual ICollection<NIST_SAL_INFO_TYPES> NIST_SAL_INFO_TYPES { get; set; }
        [InverseProperty("Assessment_")]
        public virtual ICollection<NIST_SAL_QUESTION_ANSWERS> NIST_SAL_QUESTION_ANSWERS { get; set; }
    }
}