﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CSETWebCore.DataLayer
{
    /// <summary>
    /// A collection of COMPONENT_SYMBOLS_GM_TO_CSET records
    /// </summary>
    public partial class COMPONENT_SYMBOLS_GM_TO_CSET
    {
        [Key]
        [StringLength(200)]
        public string GM_FingerType { get; set; }
        public int Id { get; set; }
    }
}