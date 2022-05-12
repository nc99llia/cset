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
    /// A collection of IRP records
    /// </summary>
    public partial class IRP
    {
        public IRP()
        {
            ASSESSMENT_IRP = new HashSet<ASSESSMENT_IRP>();
        }

        [Key]
        public int IRP_ID { get; set; }
        public int? Item_Number { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Risk_1_Description { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Risk_2_Description { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Risk_3_Description { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Risk_4_Description { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Risk_5_Description { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Validation_Approach { get; set; }
        public int Header_Id { get; set; }
        [StringLength(1000)]
        [Unicode(false)]
        public string Description { get; set; }
        [StringLength(1300)]
        [Unicode(false)]
        public string DescriptionComment { get; set; }
        [Required]
        [StringLength(10)]
        [Unicode(false)]
        public string Risk_Type { get; set; }


        [ForeignKey("Header_Id")]
        [InverseProperty("IRP")]
        public virtual IRP_HEADER Header { get; set; }
        [InverseProperty("IRP")]
        public virtual ICollection<ASSESSMENT_IRP> ASSESSMENT_IRP { get; set; }
    }
}