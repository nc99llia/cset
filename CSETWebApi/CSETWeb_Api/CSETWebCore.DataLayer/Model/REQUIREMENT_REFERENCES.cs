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
    /// A collection of REQUIREMENT_REFERENCES records
    /// </summary>
    public partial class REQUIREMENT_REFERENCES
    {
        [Key]
        public int Requirement_Id { get; set; }
        [Key]
        public int Gen_File_Id { get; set; }
        [Key]
        [StringLength(400)]
        public string Section_Ref { get; set; }
        public int? Page_Number { get; set; }
        [StringLength(2000)]
        public string Destination_String { get; set; }

        [ForeignKey("Gen_File_Id")]
        [InverseProperty("REQUIREMENT_REFERENCES")]
        public virtual GEN_FILE Gen_File { get; set; }
        [ForeignKey("Requirement_Id")]
        [InverseProperty("REQUIREMENT_REFERENCES")]
        public virtual NEW_REQUIREMENT Requirement { get; set; }
    }
}