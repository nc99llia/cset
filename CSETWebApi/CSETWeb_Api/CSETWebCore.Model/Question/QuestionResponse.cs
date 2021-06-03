﻿using System.Collections.Generic;
using CSETWebCore.Model.Maturity;

namespace CSETWebCore.Model.Question
{
    public class QuestionResponse
    {
        /// <summary>
        /// Lists the display names of the maturity levels.
        /// </summary>
        public List<MaturityLevel> MaturityLevels { get; set; }

        // The target level
        public int MaturityTargetLevel { get; set; }

        public List<Domain> Domains { get; set; }
        // public List<Category> Categories;

        public string ModelName { get; set; }

        // The current mode of the assessment
        public string ApplicationMode { get; set; }

        // The count of all questions in the response.
        public int QuestionCount { get; set; }

        // The count of all requirements in the response.
        public int RequirementCount { get; set; }

        // Answer options supported for this question list.  Normally everything 
        // is supported, but maturity models may not offer all options.
        public List<string> AnswerOptions { get; set; } = new List<string>() { "Y", "N", "NA", "A" };



        /// <summary>
        /// The calculated IRP.  If overridden, the override is returned.
        /// </summary>
        public int OverallIRP { get; set; }

        public int DefaultComponentsCount { get; set; }
    }
}