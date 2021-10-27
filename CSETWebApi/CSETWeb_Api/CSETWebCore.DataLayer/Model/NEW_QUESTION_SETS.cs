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
    /// A collection of NEW_QUESTION_SETS records
    /// </summary>
    [Index(nameof(Question_Id), nameof(Set_Name), Name = "IX_NEW_QUESTION_SETS", IsUnique = true)]
    public partial class NEW_QUESTION_SETS
    {
        public NEW_QUESTION_SETS()
        {
            NEW_QUESTION_LEVELS = new HashSet<NEW_QUESTION_LEVELS>();
        }

        /// <summary>
        /// The Set Name is used to
        /// </summary>
        [Required]
        [StringLength(50)]
        public string Set_Name { get; set; }
        /// <summary>
        /// The Question Id is used to
        /// </summary>
        public int Question_Id { get; set; }
        [Key]
        public int New_Question_Set_Id { get; set; }

        [ForeignKey(nameof(Question_Id))]
        [InverseProperty(nameof(NEW_QUESTION.NEW_QUESTION_SETS))]
        public virtual NEW_QUESTION Question { get; set; }
        [ForeignKey(nameof(Set_Name))]
        [InverseProperty(nameof(SETS.NEW_QUESTION_SETS))]
        public virtual SETS Set_NameNavigation { get; set; }
        [InverseProperty("New_Question_Set")]
        public virtual ICollection<NEW_QUESTION_LEVELS> NEW_QUESTION_LEVELS { get; set; }
    }
}