﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CSETWebCore.Model.Question;
using CSETWebCore.DataLayer.Model;
using CSETWebCore.Interfaces.AdminTab;

namespace CSETWebCore.Helpers
{
    /// <summary>
    /// Saves the last-answered question/option.
    /// </summary>
    public class LastAnsweredHelper
    {


        private readonly CSETContext _context;


        public LastAnsweredHelper(CSETContext context) 
        {
            _context = context;
        }

        /// <summary>
        /// Save the group/requirement/question/option so that the user can return to the last question answered
        /// on a subsequent rerun of the assessment.
        /// </summary>
        /// <param name="questionId"></param>
        public void Save(int assessmentId, int? userId, Answer ans)
        {
            var ac = _context.ASSESSMENT_CONTACTS.Where(x => x.UserId == userId && x.Assessment_Id == assessmentId).FirstOrDefault();
            if (ac == null)
            {
                // no contact record - should never happen
                return;
            }


            if (ans.QuestionType.ToLower() == "maturity")
            {
                // get the question ID if not in the answer
                if (ans.QuestionId == 0)
                {
                    var dbOption = _context.MATURITY_ANSWER_OPTIONS.FirstOrDefault(x => x.Mat_Option_Id == ans.OptionId);
                    ans.QuestionId = dbOption.Mat_Question_Id;
                }

                var dbQuestion = _context.MATURITY_QUESTIONS.Where(x => x.Mat_Question_Id == ans.QuestionId).FirstOrDefault();

                ac.Bookmark = $"MG:{dbQuestion.Grouping_Id},MQ:{ans.QuestionId}";

                if (ans.OptionId != null && ans.OptionId != 0)
                {
                    ac.Bookmark += $",MO:{ans.OptionId}";
                }
            }


            if (ans.QuestionType.ToLower() == "requirement")
            {
                ac.Bookmark = $"R:{ans.QuestionId}";
            }


            if (ans.QuestionType.ToLower() == "question")
            {
                ac.Bookmark = $"Q:{ans.QuestionId}";
            }


            _context.SaveChanges();
        }
    }
}
