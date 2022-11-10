﻿using System;
using System.Collections.Generic;

namespace CSETWebCore.Model.Question
{
    public class QuestionAnswer
    {
        /// <summary>
        /// An ordinal number in the case of a Question, and the requirement title/version
        /// in the case of Requirement.
        /// </summary>
        public string DisplayNumber { get; set; }
        public int QuestionId { get; set; }

        /// <summary>
        /// Questions that have subparts use this to put the subpart to the parent 
        /// part of the question.
        /// </summary>
        public int? ParentQuestionId { get; set; }

        public bool IsParentQuestion { get; set; } = false;

        public int Sequence { get; set; }

        public string ShortName { get; set; }

        public string QuestionType { get; set; }
        public string QuestionText { get; set; }
        public List<ParameterToken> ParmSubs { get; set; }
        public string StdRefId { get; set; }
        public string Answer { get; set; }
        public string AltAnswerText { get; set; }
        public string FreeResponseAnswer { get; set; }
        public string Comment { get; set; }
        public string Feedback { get; set; }
        public bool MarkForReview { get; set; }
        public string SetName { get; set; }

        /// <summary>
        /// Indicates if the question should be included in the
        /// answer completion calculation on the UI widget.
        /// </summary>
        public bool Countable { get; set; }

        /// <summary>
        /// Indicates an answer that has been reviewed.  
        /// This field was added for NCUA/ACET support.
        /// </summary>
        public bool Reviewed { get; set; }
        public bool HasComment { get; set; }
        public bool HasDocument { get; set; }
        public bool HasFeedback { get; set; }
        public int DocNum { get; set; }
        public bool HasDiscovery { get; set; }
        public int FindingNum { get; set; }
        public int? Answer_Id { get; set; }

        public int MaturityModelId { get; set; }

        /// <summary>
        /// Indicates the maturity level of the question/requirement/statement.
        /// This is NOT the maturity_level_id from the MATURITY_LEVELS table.
        /// This is the normalized ordinal "level", e.g., 1, 2, 3, etc.
        /// </summary>
        public int MaturityLevel { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string MaturityLevelName { get; set; }


        /// <summary>
        /// Selectable options that belong to the question.  
        /// This is the first cut at including
        /// </summary>
        public List<Cis.Option> Options { get; set; } = new List<Cis.Option>();


        public bool Is_Maturity { get; set; }
        public bool Is_Component { get; set; }
        public Guid ComponentGuid { get; set; }
        public bool Is_Requirement { get; set; }
    }
}