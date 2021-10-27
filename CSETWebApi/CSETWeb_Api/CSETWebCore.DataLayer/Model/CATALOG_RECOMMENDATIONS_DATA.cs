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
    /// A collection of CATALOG_RECOMMENDATIONS_DATA records
    /// </summary>
    public partial class CATALOG_RECOMMENDATIONS_DATA
    {
        public CATALOG_RECOMMENDATIONS_DATA()
        {
            RECOMMENDATIONS_REFERENCES = new HashSet<RECOMMENDATIONS_REFERENCES>();
        }

        /// <summary>
        /// The Data Id is used to
        /// </summary>
        [Key]
        public int Data_Id { get; set; }
        /// <summary>
        /// The Req Oracle Id is used to
        /// </summary>
        public int? Req_Oracle_Id { get; set; }
        /// <summary>
        /// The Parent Heading Id is used to
        /// </summary>
        public int? Parent_Heading_Id { get; set; }
        /// <summary>
        /// The Heading is used to
        /// </summary>
        public string Heading { get; set; }
        /// <summary>
        /// The Heading Html is used to
        /// </summary>
        public string Heading_Html { get; set; }
        /// <summary>
        /// The Section Long Number is used to
        /// </summary>
        [StringLength(50)]
        public string Section_Long_Number { get; set; }
        /// <summary>
        /// The Section Short Number is used to
        /// </summary>
        [StringLength(50)]
        public string Section_Short_Number { get; set; }
        /// <summary>
        /// The Topic Name is used to
        /// </summary>
        [StringLength(150)]
        public string Topic_Name { get; set; }
        /// <summary>
        /// The Section Short Name is used to
        /// </summary>
        [StringLength(150)]
        public string Section_Short_Name { get; set; }
        /// <summary>
        /// The Requirement Text is used to
        /// </summary>
        public string Requirement_Text { get; set; }
        /// <summary>
        /// The Supplemental Guidance is used to
        /// </summary>
        public string Supplemental_Guidance { get; set; }
        /// <summary>
        /// The Supplemental Guidance Html is used to
        /// </summary>
        public string Supplemental_Guidance_Html { get; set; }
        /// <summary>
        /// The Requirement is used to
        /// </summary>
        public string Requirement { get; set; }
        /// <summary>
        /// The Requirement Html is used to
        /// </summary>
        public string Requirement_Html { get; set; }
        /// <summary>
        /// The Enhancement is used to
        /// </summary>
        public string Enhancement { get; set; }
        /// <summary>
        /// The Enhancement Html is used to
        /// </summary>
        public string Enhancement_Html { get; set; }
        /// <summary>
        /// The Flow Document is used to
        /// </summary>
        public string Flow_Document { get; set; }

        [ForeignKey(nameof(Parent_Heading_Id))]
        [InverseProperty(nameof(CATALOG_RECOMMENDATIONS_HEADINGS.CATALOG_RECOMMENDATIONS_DATA))]
        public virtual CATALOG_RECOMMENDATIONS_HEADINGS Parent_Heading { get; set; }
        [InverseProperty("Data")]
        public virtual ICollection<RECOMMENDATIONS_REFERENCES> RECOMMENDATIONS_REFERENCES { get; set; }
    }
}