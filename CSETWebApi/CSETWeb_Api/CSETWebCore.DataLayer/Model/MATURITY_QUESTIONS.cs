﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CSETWebCore.DataLayer.Model;

/// <summary>
/// A collection of MATURITY_QUESTIONS records
/// </summary>
public partial class MATURITY_QUESTIONS
{
    [Key]
    public int Mat_Question_Id { get; set; }

    [StringLength(250)]
    public string Question_Title { get; set; }

    [Required]
    public string Question_Text { get; set; }

    public string Supplemental_Info { get; set; }

    [StringLength(250)]
    public string Category { get; set; }

    [StringLength(250)]
    public string Sub_Category { get; set; }

    public int Maturity_Level_Id { get; set; }

    public int Sequence { get; set; }

    [MaxLength(20)]
    public byte[] Text_Hash { get; set; }

    public int Maturity_Model_Id { get; set; }

    public int? Parent_Question_Id { get; set; }

    public int? Ranking { get; set; }

    public int? Grouping_Id { get; set; }

    public string Examination_Approach { get; set; }

    [StringLength(80)]
    public string Short_Name { get; set; }

    [StringLength(50)]
    public string Mat_Question_Type { get; set; }

    public int? Parent_Option_Id { get; set; }

    public string Supplemental_Fact { get; set; }

    [StringLength(250)]
    public string Scope { get; set; }

    public string Recommend_Action { get; set; }

    public string Risk_Addressed { get; set; }

    public string Services { get; set; }

    public string Outcome { get; set; }

    [StringLength(300)]
    public string Security_Practice { get; set; }

    [ForeignKey("Grouping_Id")]
    [InverseProperty("MATURITY_QUESTIONS")]
    public virtual MATURITY_GROUPINGS Grouping { get; set; }

    [InverseProperty("Mat_Question")]
    public virtual ICollection<HYDRO_DATA> HYDRO_DATA { get; set; } = new List<HYDRO_DATA>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<ISE_ACTIONS> ISE_ACTIONS { get; set; } = new List<ISE_ACTIONS>();

    [InverseProperty("Parent_Question")]
    public virtual ICollection<MATURITY_QUESTIONS> InverseParent_Question { get; set; } = new List<MATURITY_QUESTIONS>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_ANSWER_OPTIONS> MATURITY_ANSWER_OPTIONS { get; set; } = new List<MATURITY_ANSWER_OPTIONS>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_QUESTION_PROPS> MATURITY_QUESTION_PROPS { get; set; } = new List<MATURITY_QUESTION_PROPS>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_REFERENCES> MATURITY_REFERENCES { get; set; } = new List<MATURITY_REFERENCES>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_REFERENCE_TEXT> MATURITY_REFERENCE_TEXT { get; set; } = new List<MATURITY_REFERENCE_TEXT>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_SOURCE_FILES> MATURITY_SOURCE_FILES { get; set; } = new List<MATURITY_SOURCE_FILES>();

    [InverseProperty("Mat_Question")]
    public virtual ICollection<MATURITY_SUB_MODEL_QUESTIONS> MATURITY_SUB_MODEL_QUESTIONS { get; set; } = new List<MATURITY_SUB_MODEL_QUESTIONS>();

    [ForeignKey("Mat_Question_Type")]
    [InverseProperty("MATURITY_QUESTIONS")]
    public virtual MATURITY_QUESTION_TYPES Mat_Question_TypeNavigation { get; set; }

    [ForeignKey("Maturity_Level_Id")]
    [InverseProperty("MATURITY_QUESTIONS")]
    public virtual MATURITY_LEVELS Maturity_Level { get; set; }

    [ForeignKey("Maturity_Model_Id")]
    [InverseProperty("MATURITY_QUESTIONS")]
    public virtual MATURITY_MODELS Maturity_Model { get; set; }

    [ForeignKey("Parent_Option_Id")]
    [InverseProperty("MATURITY_QUESTIONS")]
    public virtual MATURITY_ANSWER_OPTIONS Parent_Option { get; set; }

    [ForeignKey("Parent_Question_Id")]
    [InverseProperty("InverseParent_Question")]
    public virtual MATURITY_QUESTIONS Parent_Question { get; set; }

    [InverseProperty("Mat_Question")]
    public virtual ICollection<TTP_MAT_QUESTION> TTP_MAT_QUESTION { get; set; } = new List<TTP_MAT_QUESTION>();
}