﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    public partial class CIST_SITE_INFORMATION
    {
        [Key]
        public int Assessment_Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Assessment_Executor { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Assessment_Motivation { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? Visit_Date { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string Street_Address { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Site_Name { get; set; }
        public bool? Completed_For_SLTT { get; set; }
        public bool? Completed_For_Federal { get; set; }
        public bool? Completed_For_Special_Event { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string CI_Sector { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Sub_Sector { get; set; }
    }
}