﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model
{
    public partial class ASSESSMENT_DIAGRAM_COMPONENTS
    {
        [Key]
        public int Assessment_Id { get; set; }
        [Key]
        public Guid Component_Guid { get; set; }
        public int Component_Symbol_Id { get; set; }
        [StringLength(200)]
        [Unicode(false)]
        public string label { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string DrawIO_id { get; set; }
        public int? Zone_Id { get; set; }
        public int? Layer_Id { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Parent_DrawIO_Id { get; set; }

        [ForeignKey("Assessment_Id")]
        [InverseProperty("ASSESSMENT_DIAGRAM_COMPONENTS")]
        public virtual ASSESSMENTS Assessment { get; set; }
        [ForeignKey("Component_Symbol_Id")]
        [InverseProperty("ASSESSMENT_DIAGRAM_COMPONENTS")]
        public virtual COMPONENT_SYMBOLS Component_Symbol { get; set; }
        [ForeignKey("Layer_Id")]
        [InverseProperty("ASSESSMENT_DIAGRAM_COMPONENTSLayer")]
        public virtual DIAGRAM_CONTAINER Layer { get; set; }
        [ForeignKey("Zone_Id")]
        [InverseProperty("ASSESSMENT_DIAGRAM_COMPONENTSZone")]
        public virtual DIAGRAM_CONTAINER Zone { get; set; }
    }
}