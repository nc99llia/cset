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
    /// A collection of LEVEL_BACKUP_ACET records
    /// </summary>
    public partial class LEVEL_BACKUP_ACET
    {
        [Key]
        public int requirement_id { get; set; }
        [Key]
        [StringLength(50)]
        public string Standard_Level { get; set; }
    }
}