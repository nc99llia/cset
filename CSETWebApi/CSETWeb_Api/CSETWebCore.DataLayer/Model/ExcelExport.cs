﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CSETWebCore.DataLayer.Model
{
    [Keyless]
    public partial class ExcelExport
    {
        [Required]
        [StringLength(100)]
        public string Assessment_Name { get; set; }
        [StringLength(100)]
        public string Facility_Name { get; set; }
        [StringLength(100)]
        public string City_Or_Site_Name { get; set; }
        [StringLength(100)]
        public string State_Province_Or_Region { get; set; }
        [Column(TypeName = "ntext")]
        public string Executive_Summary { get; set; }
        public int Assessment_Id { get; set; }
        public DateTime AssessmentCreatedDate { get; set; }
        public int? AssessmentCreatorId { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        [StringLength(50)]
        public string Alias { get; set; }
        public Guid Assessment_GUID { get; set; }
        public DateTime Assessment_Date { get; set; }
        [StringLength(100)]
        public string CreditUnionName { get; set; }
        [StringLength(100)]
        public string Charter { get; set; }
        [StringLength(100)]
        public string Assets { get; set; }
        [StringLength(4000)]
        public string Assessment_Description { get; set; }
        [Required]
        [StringLength(150)]
        public string PrimaryEmail { get; set; }
        public int UserId { get; set; }
        public bool PasswordResetRequired { get; set; }
        [StringLength(150)]
        public string FirstName { get; set; }
        [StringLength(150)]
        public string LastName { get; set; }
    }
}