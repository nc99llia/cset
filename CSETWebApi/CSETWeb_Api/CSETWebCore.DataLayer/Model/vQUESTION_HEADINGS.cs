﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    public partial class vQUESTION_HEADINGS
    {
        public int Heading_Pair_Id { get; set; }
        [Required]
        [StringLength(250)]
        public string Question_Group_Heading { get; set; }
        [Required]
        [StringLength(100)]
        public string Universal_Sub_Category { get; set; }
        [StringLength(1000)]
        public string Sub_Heading_Question_Description { get; set; }
        public int Universal_Sub_Category_Id { get; set; }
    }
}