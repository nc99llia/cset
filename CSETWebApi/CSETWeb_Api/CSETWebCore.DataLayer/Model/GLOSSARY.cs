﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of GLOSSARY records
    /// </summary>
    public partial class GLOSSARY
    {
        [Key]
        public int Maturity_Model_Id { get; set; }
        [Key]
        [StringLength(100)]
        public string Term { get; set; }
        [Required]
        public string Definition { get; set; }
    }
}