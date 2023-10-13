﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

public partial class EXT_SUB_SECTOR
{
    public int SectorId { get; set; }

    [Required]
    [StringLength(250)]
    public string SubSectorName { get; set; }

    [Key]
    public int SubSectorId { get; set; }

    [InverseProperty("SubSector")]
    public virtual ICollection<DEMOGRAPHIC_ANSWERS> DEMOGRAPHIC_ANSWERS { get; set; } = new List<DEMOGRAPHIC_ANSWERS>();

    [ForeignKey("SectorId")]
    [InverseProperty("EXT_SUB_SECTOR")]
    public virtual EXT_SECTOR Sector { get; set; }
}