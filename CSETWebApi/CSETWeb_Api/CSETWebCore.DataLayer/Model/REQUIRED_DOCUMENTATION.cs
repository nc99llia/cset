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
    /// A collection of REQUIRED_DOCUMENTATION records
    /// </summary>
    public partial class REQUIRED_DOCUMENTATION
    {
        public REQUIRED_DOCUMENTATION()
        {
            ASSESSMENTS_REQUIRED_DOCUMENTATION = new HashSet<ASSESSMENTS_REQUIRED_DOCUMENTATION>();
        }

        [Key]
        public int Documentation_Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Number { get; set; }
        [StringLength(4000)]
        [Unicode(false)]
        public string Document_Description { get; set; }
        public int RDH_Id { get; set; }
        public int? Document_Order { get; set; }

        [ForeignKey("RDH_Id")]
        [InverseProperty("REQUIRED_DOCUMENTATION")]
        public virtual REQUIRED_DOCUMENTATION_HEADERS RDH { get; set; }
        [InverseProperty("Documentation")]
        public virtual ICollection<ASSESSMENTS_REQUIRED_DOCUMENTATION> ASSESSMENTS_REQUIRED_DOCUMENTATION { get; set; }
    }
}