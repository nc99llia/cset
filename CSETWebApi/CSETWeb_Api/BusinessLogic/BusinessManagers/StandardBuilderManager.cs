﻿using CSETWeb_Api.BusinessLogic.Models;
using CSETWeb_Api.Helpers;
using DataLayer;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data.Entity.Migrations;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.Http;

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;



namespace CSETWeb_Api.BusinessManagers
{
    /// <summary>
    /// 
    /// </summary>
    public class StandardBuilderManager
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<SetDetail> GetCustomSetList()
        {
            using (var db = new CSETWebEntities())
            {
                List<SetDetail> list = new List<SetDetail>();

                var s = db.SETS.Where(x => x.Is_Custom).ToList();
                foreach (SET set in s)
                {
                    SetDetail sr = new SetDetail
                    {
                        SetName = set.Set_Name,
                        FullName = set.Full_Name,
                        ShortName = set.Short_Name,
                        SetCategory = set.Set_Category_Id != null ? (int)set.Set_Category_Id : 0,
                        IsCustom = set.Is_Custom,
                        IsDisplayed = set.Is_Displayed,

                        Clonable = true,
                        Deletable = true
                    };

                    list.Add(sr);
                }

                return list;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="setName"></param>
        public SetDetail GetSetDetail(string setName)
        {
            using (var db = new CSETWebEntities())
            {
                var dbSet = db.SETS.Where(x => x.Set_Name == setName).FirstOrDefault();

                SetDetail set = new SetDetail();

                // instantiate a Set and populate it
                if (dbSet == null || string.IsNullOrEmpty(dbSet.Set_Name))
                {
                    set.SetName = GenerateNewSetName();
                    set.SetCategory = 0;
                    set.IsCustom = true;
                    set.IsDisplayed = true;
                }
                else
                {
                    set.Description = dbSet.Standard_ToolTip;
                    set.FullName = dbSet.Full_Name;
                    set.SetName = dbSet.Set_Name;
                    set.SetCategory = dbSet.Set_Category_Id == null ? 0 : (int)dbSet.Set_Category_Id;
                    set.ShortName = dbSet.Short_Name;
                    set.IsCustom = dbSet.Is_Custom;
                    set.IsDisplayed = dbSet.Is_Displayed;
                }


                // include the set category values
                set.CategoryList = new List<SetCategory>();
                var setsCategories = db.SETS_CATEGORY.ToList();
                foreach (SETS_CATEGORY cat in setsCategories)
                {
                    set.CategoryList.Add(new SetCategory(cat.Set_Category_Id, cat.Set_Category_Name));
                }

                return set;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        public SetDetail CloneSet(string setName)
        {
            // clone the SETS record
            using (var db = new CSETWebEntities())
            {
                var dbSet = db.SETS.Where(x => x.Set_Name == setName).FirstOrDefault();
                if (dbSet == null)
                {
                    return null;
                }

                var copy = (SET)db.Entry(dbSet).CurrentValues.ToObject();

                copy.Set_Name = GenerateNewSetName();
                copy.Full_Name = dbSet.Full_Name + " (copy)";
                copy.Is_Custom = true;

                db.SETS.AddOrUpdate(copy);
                db.SaveChanges();

                return GetSetDetail(copy.Set_Name);
            }
        }


        /// <summary>
        /// 
        /// </summary>
        public void DeleteSet(string setName)
        {
            using (var db = new CSETWebEntities())
            {
                var dbSet = db.SETS.Where(x => x.Set_Name == setName).FirstOrDefault();

                if (dbSet == null)
                {
                    return;
                }

                // Don't allow a non-custom set to be deleted
                if (!dbSet.Is_Custom)
                {
                    return;
                }


                db.SETS.Remove(dbSet);
                db.SaveChanges();
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="set"></param>
        /// <returns></returns>
        public string SaveSetDetail(SetDetail set)
        {
            CSETWebEntities db = new CSETWebEntities();

            if (string.IsNullOrEmpty(set.FullName))
            {
                set.FullName = "(untitled set)";
            }

            if (string.IsNullOrEmpty(set.ShortName))
            {
                set.ShortName = "";
            }


            // Add or update the ASSESSMENT record
            var dbSet = new DataLayer.SET()
            {
                Set_Name = set.SetName,
                Full_Name = set.FullName,
                Short_Name = set.ShortName,
                Standard_ToolTip = set.Description,
                Set_Category_Id = set.SetCategory == 0 ? null : set.SetCategory,
                Is_Custom = set.IsCustom,
                Is_Displayed = set.IsDisplayed
            };

            db.SETS.AddOrUpdate(dbSet);
            db.SaveChanges();

            return dbSet.Set_Name;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        private string GenerateNewSetName()
        {
            return "SET." + DateTime.Now.ToString("yyyyMMdd.HHmmss");
        }


        /// <summary>
        /// 
        /// </summary>
        public QuestionListResponse GetQuestionsForSet(string setName)
        {
            using (var db = new CSETWebEntities())
            {
                List<NEW_QUESTION_SETS> dbQuestions = db.NEW_QUESTION_SETS.Where(x => x.Set_Name == setName).ToList();

                List<QuestionDetail> response = new List<QuestionDetail>();
                foreach (NEW_QUESTION_SETS nqs in dbQuestions)
                {
                    QuestionDetail q = new QuestionDetail();
                    q.QuestionID = nqs.NEW_QUESTION.Question_Id;
                    q.QuestionText = nqs.NEW_QUESTION.Simple_Question;
                    PopulateCategorySubcategory(nqs.NEW_QUESTION.Heading_Pair_Id, db,
                        ref q.QuestionGroupHeading, ref q.PairID, ref q.Subcategory, ref q.SubHeading);
                    q.Title = GetTitle(nqs.NEW_QUESTION.Question_Id, db);

                    // Look at the question's original set to determine if the question is 'custom' and can be edited
                    q.IsCustom = db.SETS.Where(x => x.Set_Name == nqs.NEW_QUESTION.Original_Set_Name).FirstOrDefault().Is_Custom;


                    // Get the SAL levels for this question-set
                    var sals = db.NEW_QUESTION_LEVELS.Where(l => l.New_Question_Set_Id == nqs.New_Question_Set_Id).ToList();
                    foreach (NEW_QUESTION_LEVELS l in sals)
                    {
                        q.SalLevels.Add(l.Universal_Sal_Level);
                    }

                    response.Add(q);
                }

                List<QuestionDetail> list = response.OrderBy(x => x.QuestionGroupHeading).ThenBy(x => x.Subcategory).ThenBy(x => x.PairID).ToList();

                List<int> customPairingsForThisSet = db.UNIVERSAL_SUB_CATEGORY_HEADINGS
                    .Where(x => x.Set_Name == setName).Select(x => x.Heading_Pair_Id).ToList();

                QuestionListResponse ql = new QuestionListResponse();

                var set = db.SETS.Where(x => x.Set_Name == setName).FirstOrDefault();
                ql.SetFullName = set.Full_Name;
                ql.SetShortName = set.Short_Name;
                ql.SetDescription = set.Standard_ToolTip;


                string currentQGH = string.Empty;
                QuestionListCategory cat = null;

                // In case there are two subcategories with the same name but different pair IDs, they should be rendered separately.
                int currentSubcategoryPairID = -1;
                QuestionListSubcategory subcat = null;

                int displayNumber = 0;

                foreach (QuestionDetail q in list)
                {
                    if (q.QuestionGroupHeading != currentQGH)
                    {
                        cat = new QuestionListCategory
                        {
                            CategoryName = q.QuestionGroupHeading
                        };

                        ql.Categories.Add(cat);
                        currentQGH = q.QuestionGroupHeading;
                        displayNumber = 0;
                    }


                    if (q.PairID != currentSubcategoryPairID)
                    {
                        subcat = new QuestionListSubcategory
                        {
                            PairID = q.PairID,
                            SubcategoryName = q.Subcategory,
                            SubHeading = q.SubHeading,
                            IsSubHeadingEditable = customPairingsForThisSet.Contains(q.PairID)
                        };

                        cat.Subcategories.Add(subcat);
                        currentSubcategoryPairID = q.PairID;
                    }

                    q.DisplayNumber = ++displayNumber;
                    subcat.Questions.Add(q);
                }

                return ql;
            }
        }


        /// <summary>
        /// Returns a list of questions whose 'original_set_name' is the one specified.
        /// This is used to know which questions will be affected if a set is 
        /// deleted.
        /// </summary>
        /// <param name="setName"></param>
        public List<int> GetQuestionsOriginatingFromSet(string setName)
        {
            using (var db = new CSETWebEntities())
            {
                var query = db.NEW_QUESTION.Where(x => x.Original_Set_Name == setName).ToList();
                List<int> qList = new List<int>();
                foreach (NEW_QUESTION q in query)
                {
                    qList.Add(q.Question_Id);
                }
                return qList;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        private void PopulateCategorySubcategory(int headingPairId, CSETWebEntities db, ref string cat,
            ref int pairID, ref string subcat, ref string subheading)
        {
            var query = from h in db.UNIVERSAL_SUB_CATEGORY_HEADINGS
                        from h1 in db.QUESTION_GROUP_HEADING.Where(x => x.Question_Group_Heading_Id == h.Question_Group_Heading_Id)
                        from h2 in db.UNIVERSAL_SUB_CATEGORIES.Where(x => x.Universal_Sub_Category_Id == h.Universal_Sub_Category_Id)
                        where h.Heading_Pair_Id == headingPairId
                        select new
                        {
                            h1.Question_Group_Heading1,
                            h2.Universal_Sub_Category,
                            h.Heading_Pair_Id,
                            h.Sub_Heading_Question_Description,
                            h.Set_Name
                        };

            var result = query.FirstOrDefault();
            cat = result.Question_Group_Heading1;
            subcat = result.Universal_Sub_Category;
            pairID = result.Heading_Pair_Id;
            subheading = result.Sub_Heading_Question_Description;
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="questionId"></param>
        /// <param name="db"></param>
        /// <returns></returns>
        private string GetTitle(int questionId, CSETWebEntities db)
        {
            var query = from rqs in db.REQUIREMENT_QUESTIONS_SETS
                        from r in db.NEW_REQUIREMENT.Where(x => x.Requirement_Id == rqs.Requirement_Id)
                        where rqs.Question_Id == questionId
                        select r.Requirement_Title;

            if (query.FirstOrDefault() == null)
            {
                return string.Empty;
            }

            return query.FirstOrDefault();
        }


        /// <summary>
        /// Queries the database to see if there is already a question with this text.
        /// 
        /// Tech note:  If comparing hashes is preferable, QuestionHash is SHA1 encryption 
        /// of the first 8000 bytes of the question text.
        /// </summary>
        /// <param name="questionText"></param>
        /// <returns></returns>
        public bool ExistsQuestionText(string questionText)
        {
            using (var db = new CSETWebEntities())
            {
                return (db.NEW_QUESTION.Where(q => q.Simple_Question == questionText).Count() > 0);
            }
        }


        /// <summary>
        /// Creates a new custom question from the supplied text.
        /// </summary>
        /// <param name="request"></param>
        public void AddCustomQuestion(SetQuestion request)
        {
            if (string.IsNullOrEmpty(request.CustomQuestionText))
            {
                return;
            }

            using (var db = new CSETWebEntities())
            {
                NEW_QUESTION q = new NEW_QUESTION();
                q.Simple_Question = request.CustomQuestionText;

                // TODO:  std_ref + std_ref_number must be unique
                q.Std_Ref = DateTime.Now.Millisecond.ToString();
                q.Std_Ref_Number = 0;

                q.Universal_Sal_Level = "L";
                q.Weight = 0;
                q.Original_Set_Name = request.SetName;
                q.Heading_Pair_Id = GetHeadingPair(request.QuestionCategoryID, request.QuestionSubcategoryText, request.SetName);

                db.NEW_QUESTION.Add(q);
                db.SaveChanges();


                if (request.RequirementID > 0)
                {
                    // Add question to requirement
                    REQUIREMENT_QUESTIONS_SETS rqs = new REQUIREMENT_QUESTIONS_SETS
                    {
                        Question_Id = q.Question_Id,
                        Set_Name = request.SetName,
                        Requirement_Id = request.RequirementID
                    };

                    db.REQUIREMENT_QUESTIONS_SETS.Add(rqs);
                }


                // Add question to set
                NEW_QUESTION_SETS nqs = new NEW_QUESTION_SETS
                {
                    Question_Id = q.Question_Id,
                    Set_Name = request.SetName
                };

                db.NEW_QUESTION_SETS.AddOrUpdate(nqs);


                // Define SALs
                foreach (string level in request.SalLevels)
                {
                    NEW_QUESTION_LEVELS nql = new NEW_QUESTION_LEVELS
                    {
                        New_Question_Set_Id = nqs.New_Question_Set_Id,
                        Universal_Sal_Level = level
                    };

                    db.NEW_QUESTION_LEVELS.Add(nql);
                }

                db.SaveChanges();
            }
        }


        /// <summary>
        /// Adds an existing question to a set or requirement.
        /// </summary>
        /// <param name="request"></param>
        public void AddQuestion(SetQuestion request)
        {
            using (var db = new CSETWebEntities())
            {
                if (request.RequirementID > 0)
                {
                    // Attach the question to a Requirement
                    REQUIREMENT_QUESTIONS_SETS rqs = new REQUIREMENT_QUESTIONS_SETS
                    {
                        Question_Id = request.QuestionID,
                        Set_Name = request.SetName,
                        Requirement_Id = request.RequirementID
                    };

                    db.REQUIREMENT_QUESTIONS_SETS.AddOrUpdate(rqs);
                    db.SaveChanges();
                }


                // Attach this question to the Set
                NEW_QUESTION_SETS nqs = new NEW_QUESTION_SETS
                {
                    Question_Id = request.QuestionID,
                    Set_Name = request.SetName
                };

                db.NEW_QUESTION_SETS.AddOrUpdate(nqs);
                db.SaveChanges();


                // SAL levels
                var nqls = db.NEW_QUESTION_LEVELS.Where(l => l.New_Question_Set_Id == nqs.New_Question_Set_Id);
                foreach (NEW_QUESTION_LEVELS l in nqls)
                {
                    db.NEW_QUESTION_LEVELS.Remove(l);
                }
                db.SaveChanges();

                foreach (string l in request.SalLevels)
                {
                    NEW_QUESTION_LEVELS nql = new NEW_QUESTION_LEVELS
                    {
                        New_Question_Set_Id = nqs.New_Question_Set_Id,
                        Universal_Sal_Level = l
                    };

                    db.NEW_QUESTION_LEVELS.Add(nql);
                }
                db.SaveChanges();
            }
        }


        /// <summary>
        /// Detaches the specified question from the Set or Requirement.
        /// </summary>
        /// <param name="request"></param>
        public void RemoveQuestion(SetQuestion request)
        {
            using (var db = new CSETWebEntities())
            {
                if (request.RequirementID != 0)
                {
                    // Requirement-related question
                    var rqs = db.REQUIREMENT_QUESTIONS_SETS
                        .Where(x => x.Set_Name == request.SetName && x.Question_Id == request.QuestionID).FirstOrDefault();
                    if (rqs == null)
                    {
                        return;
                    }
                    db.REQUIREMENT_QUESTIONS_SETS.Remove(rqs);
                }

                // Set-level question
                var nqs = db.NEW_QUESTION_SETS.Where(x => x.Set_Name == request.SetName && x.Question_Id == request.QuestionID).FirstOrDefault();
                if (nqs == null)
                {
                    return;
                }
                db.NEW_QUESTION_SETS.Remove(nqs);

                db.SaveChanges();
            }
        }


        /// <summary>
        /// Finds or creates a set-specific UNIVERSAL_SUB_CATEGORY_HEADING
        /// for the category/subcategory/set.
        /// </summary>
        /// <returns></returns>
        private int GetHeadingPair(int categoryId, string subcatText, string setName)
        {
            int subcatID = 0;

            using (var db = new CSETWebEntities())
            {
                // Either find or create the subcategory
                var subcat = db.UNIVERSAL_SUB_CATEGORIES.Where(x => x.Universal_Sub_Category == subcatText).FirstOrDefault();
                if (subcat != null)
                {
                    subcatID = subcat.Universal_Sub_Category_Id;
                }
                else
                {
                    // The subcategory name is new (entered by user) -- create a new subcategory
                    UNIVERSAL_SUB_CATEGORIES sc = new UNIVERSAL_SUB_CATEGORIES
                    {
                        Universal_Sub_Category = subcatText
                    };
                    db.UNIVERSAL_SUB_CATEGORIES.Add(sc);
                    db.SaveChanges();

                    subcatID = sc.Universal_Sub_Category_Id;
                }

                // See if we have this pairing for our set
                var usch = db.UNIVERSAL_SUB_CATEGORY_HEADINGS.Where(x => x.Question_Group_Heading_Id == categoryId
                    && x.Universal_Sub_Category_Id == subcatID
                    && x.Set_Name == setName).FirstOrDefault();

                if (usch != null)
                {
                    return usch.Heading_Pair_Id;
                }

                // Create a new set-specific USCH record
                usch = new UNIVERSAL_SUB_CATEGORY_HEADINGS
                {
                    Question_Group_Heading_Id = categoryId,
                    Universal_Sub_Category_Id = subcatID,
                    Set_Name = setName
                };
                db.UNIVERSAL_SUB_CATEGORY_HEADINGS.Add(usch);
                db.SaveChanges();

                return usch.Heading_Pair_Id;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<CategoryEntry> GetStandardCategories()
        {
            List<CategoryEntry> categoryList = new List<CategoryEntry>();

            using (var db = new CSETWebEntities())
            {
                var standardCategories = db.STANDARD_CATEGORY.ToList();
                foreach (var c in standardCategories)
                {
                    CategoryEntry entry = new CategoryEntry
                    {
                        Text = c.Standard_Category1
                    };
                    categoryList.Add(entry);
                }
            }

            return categoryList;
        }


        /// <summary>
        /// Returns a list of all Question Group Headings (Categories).
        /// Should we ignore categories that aren't paired with any subcategories
        /// in the UNIVERSAL_SUB_CATEGORY_HEADINGS table?
        /// </summary>
        public CategoriesSubcategoriesGroupHeadings GetCategoriesSubcategoriesGroupHeadings()
        {
            CategoriesSubcategoriesGroupHeadings response = new CategoriesSubcategoriesGroupHeadings();


            using (var db = new CSETWebEntities())
            {
                List<CategoryEntry> categoryList = new List<CategoryEntry>();
                var categories = db.QUESTION_GROUP_HEADING.ToList();
                foreach (var c in categories)
                {
                    CategoryEntry entry = new CategoryEntry
                    {
                        Text = c.Question_Group_Heading1,
                        ID = c.Question_Group_Heading_Id
                    };
                    categoryList.Add(entry);
                }

                response.Categories = categoryList;


                List<CategoryEntry> subcategoryList = new List<CategoryEntry>();
                var subcategories = db.UNIVERSAL_SUB_CATEGORIES.ToList();
                foreach (var s in subcategories)
                {
                    CategoryEntry entry = new CategoryEntry
                    {
                        Text = s.Universal_Sub_Category,
                        ID = s.Universal_Sub_Category_Id
                    };
                    subcategoryList.Add(entry);
                }

                response.Subcategories = subcategoryList;


                List<CategoryEntry> groupHeadingsList = new List<CategoryEntry>();
                var groupHeadings = db.QUESTION_GROUP_HEADING.ToList();
                foreach (var h in groupHeadings)
                {
                    CategoryEntry entry = new CategoryEntry
                    {
                        Text = h.Question_Group_Heading1,
                        ID = h.Question_Group_Heading_Id
                    };
                    groupHeadingsList.Add(entry);
                }

                response.GroupHeadings = groupHeadingsList;
            }

            return response;
        }


        /// <summary>
        /// Find all questions based on the supplied search terms.  
        /// Exclude any questions that are already attached to the Set.
        /// </summary>
        /// <param name="questionText"></param>
        /// <returns></returns>
        public List<QuestionDetail> SearchQuestions(QuestionSearch searchParms)
        {
            List<QuestionDetail> candidateQuestions = new List<QuestionDetail>();

            using (var db = new CSETWebEntities())
            {
                List<int> includedQuestions = new List<int>();
                if (searchParms.RequirementID > 0)
                {
                    // Build a list of all questionIDs that are currently on the Requirement
                    includedQuestions = db.REQUIREMENT_QUESTIONS_SETS
                        .Where(x => x.Set_Name == searchParms.SetName && x.Requirement_Id == searchParms.RequirementID)
                        .Select(q => q.Question_Id).ToList();
                }
                else
                {
                    // Build a list of all questionIDs that are currently in the set
                    includedQuestions = db.NEW_QUESTION_SETS.Where(x => x.Set_Name == searchParms.SetName)
                        .Select(q => q.Question_Id).ToList();
                }


                // First, look for an exact string match within the question
                var hits = from q in db.NEW_QUESTION
                           join usch in db.UNIVERSAL_SUB_CATEGORY_HEADINGS on q.Heading_Pair_Id equals usch.Heading_Pair_Id
                           join cat in db.QUESTION_GROUP_HEADING on usch.Question_Group_Heading_Id equals cat.Question_Group_Heading_Id
                           join subcat in db.UNIVERSAL_SUB_CATEGORIES on usch.Universal_Sub_Category_Id equals subcat.Universal_Sub_Category_Id
                           where q.Simple_Question.Contains(searchParms.SearchTerms)
                           select new { q, cat, subcat };

                foreach (var hit in hits.ToList())
                {
                    if (!includedQuestions.Contains(hit.q.Question_Id) && !IsTextEncrypted(hit.q.Simple_Question))
                    {
                        QuestionDetail candidate = new QuestionDetail
                        {
                            QuestionID = hit.q.Question_Id,
                            QuestionText = QuestionsManager.FormatLineBreaks(hit.q.Simple_Question),
                            QuestionGroupHeading = hit.cat.Question_Group_Heading1,
                            Subcategory = hit.subcat.Universal_Sub_Category,
                        };

                        // Get the default SAL levels as defined in the question's original set
                        var sals = from nqs in db.NEW_QUESTION_SETS
                                   join nql in db.NEW_QUESTION_LEVELS on nqs.New_Question_Set_Id equals nql.New_Question_Set_Id
                                   where nqs.Set_Name == hit.q.Original_Set_Name && nqs.Question_Id == hit.q.Question_Id
                                   select nql.Universal_Sal_Level;

                        foreach (string s in sals.ToList())
                        {
                            candidate.SalLevels.Add(s);
                        }

                        candidateQuestions.Add(candidate);
                    }
                }


                // Then, include a multi-part LIKE search with the supplied words (search terms)
                StringBuilder sbWhereClause = new StringBuilder();

                List<string> searchTerms = new List<string>();

                // pull out any quoted literals as a single term
                string pattern = "\"(.*?)\"";
                MatchCollection m = Regex.Matches(searchParms.SearchTerms, pattern, RegexOptions.IgnoreCase);
                foreach (Match match in m)
                {
                    searchTerms.Add(match.Value.Replace("\"", ""));
                }

                // remove quoted literals so we can split the rest into words
                searchParms.SearchTerms = Regex.Replace(searchParms.SearchTerms, pattern, "");

                searchTerms.AddRange(new List<string>(searchParms.SearchTerms.Split(' ')));
                foreach (string term in searchTerms)
                {
                    if (term != "")
                    {
                        sbWhereClause.AppendFormat("[Simple_Question] like '%{0}%' and ", term.Replace('*', '%'));
                    }
                }

                string whereClause = sbWhereClause.ToString();
                whereClause = whereClause.Substring(0, whereClause.Length - 5);

                var hits2 = db.NEW_QUESTION.SqlQuery("SELECT * FROM [NEW_QUESTION] where " + whereClause).ToList();

                var hits3 = from q in hits2
                            join usch in db.UNIVERSAL_SUB_CATEGORY_HEADINGS on q.Heading_Pair_Id equals usch.Heading_Pair_Id
                            join cat in db.QUESTION_GROUP_HEADING on usch.Question_Group_Heading_Id equals cat.Question_Group_Heading_Id
                            join subcat in db.UNIVERSAL_SUB_CATEGORIES on usch.Universal_Sub_Category_Id equals subcat.Universal_Sub_Category_Id
                            where q.Simple_Question.Contains(searchParms.SearchTerms)
                            select new { q, cat, subcat };

                foreach (var hit in hits3)
                {
                    if (!candidateQuestions.Exists(q => q.QuestionID == hit.q.Question_Id))
                    {
                        if (!includedQuestions.Contains(hit.q.Question_Id) && !IsTextEncrypted(hit.q.Simple_Question))
                        {
                            candidateQuestions.Add(new QuestionDetail
                            {
                                QuestionID = hit.q.Question_Id,
                                QuestionText = QuestionsManager.FormatLineBreaks(hit.q.Simple_Question),
                                QuestionGroupHeading = hit.cat.Question_Group_Heading1,
                                Subcategory = hit.subcat.Universal_Sub_Category
                            });
                        }
                    }
                }
            }

            return candidateQuestions;
        }


        /// <summary>
        /// Sets or removes a single SAL level for a requirement or question.
        /// </summary>
        /// <param name="salParms"></param>
        public void SetSalLevel(SalParms salParms)
        {
            if (salParms.RequirementID != 0)
            {
                SetRequirementSalLevel(salParms);
            }
            if (salParms.QuestionID != 0)
            {
                SetQuestionSalLevel(salParms);
            }
        }


        /// <summary>
        /// Sets or removes a single SAL level for a requirement.
        /// </summary>
        /// <param name="salParms"></param>
        private void SetRequirementSalLevel(SalParms salParms)
        {
            using (var db = new CSETWebEntities())
            {
                REQUIREMENT_LEVELS level = db.REQUIREMENT_LEVELS.Where(x => x.Requirement_Id == salParms.RequirementID
                    && x.Standard_Level == salParms.Level).FirstOrDefault();

                if (salParms.State)
                {
                    // add the level if it doesn't exist
                    if (level == null)
                    {
                        level = new REQUIREMENT_LEVELS()
                        {
                            Requirement_Id = salParms.RequirementID,
                            Standard_Level = salParms.Level,
                            Level_Type = "NST"
                        };
                        db.REQUIREMENT_LEVELS.AddOrUpdate(level);
                        db.SaveChanges();
                    }
                }
                else
                {
                    // remove the level
                    if (level != null)
                    {
                        db.REQUIREMENT_LEVELS.Remove(level);
                        db.SaveChanges();
                    }
                }
            }
        }


        /// <summary>
        /// Sets or removes a single SAL level for a question.
        /// </summary>
        /// <param name="salParms"></param>
        private void SetQuestionSalLevel(SalParms salParms)
        {
            using (var db = new CSETWebEntities())
            {
                NEW_QUESTION_SETS nqs = db.NEW_QUESTION_SETS.Where(x => x.Question_Id == salParms.QuestionID && x.Set_Name == salParms.SetName).FirstOrDefault();

                NEW_QUESTION_LEVELS nql = db.NEW_QUESTION_LEVELS.Where(x =>
                    x.New_Question_Set_Id == nqs.New_Question_Set_Id
                    && x.Universal_Sal_Level == salParms.Level).FirstOrDefault();

                if (salParms.State)
                {
                    // add the level if it doesn't exist
                    if (nql == null)
                    {
                        nql = new NEW_QUESTION_LEVELS()
                        {
                            New_Question_Set_Id = nqs.New_Question_Set_Id,
                            Universal_Sal_Level = salParms.Level
                        };
                        db.NEW_QUESTION_LEVELS.AddOrUpdate(nql);
                        db.SaveChanges();
                    }
                }
                else
                {
                    // remove the level
                    if (nql != null)
                    {
                        db.NEW_QUESTION_LEVELS.Remove(nql);
                        db.SaveChanges();
                    }
                }
            }
        }


        /// <summary>
        /// Updates the question text.  Only questions originally attached
        /// to a 'custom' set can have their text updated.
        /// </summary>
        public void UpdateQuestionText(int questionID, string text)
        {
            using (var db = new CSETWebEntities())
            {
                // is this a custom question?
                var query = from q in db.NEW_QUESTION
                            join s in db.SETS on q.Original_Set_Name equals s.Set_Name
                            where q.Question_Id == questionID
                            select s;

                var origSet = query.FirstOrDefault();

                // if the question's original set does not exist (this should never happen), do nothing.
                if (origSet == null)
                {
                    return;
                }

                // if the question's original set is not 'custom', do nothing.
                if (!origSet.Is_Custom)
                {
                    return;
                }

                // update text
                var question = db.NEW_QUESTION.Where(x => x.Question_Id == questionID).FirstOrDefault();
                if (question == null)
                {
                    return;
                }

                question.Simple_Question = text;
                db.NEW_QUESTION.AddOrUpdate(question);
                db.SaveChanges();
            }
        }


        /// <summary>
        /// Returns a boolean indicating if the question is used by multiple SETs
        /// or has been answered in any ASSESSMENT.
        /// </summary>
        /// <param name="questionID"></param>
        /// <returns></returns>
        public bool IsQuestionInUse(int questionID)
        {
            using (var db = new CSETWebEntities())
            {
                if (db.NEW_QUESTION_SETS.Where(x => x.Question_Id == questionID).Count() > 1)
                {
                    return true;
                }

                if (db.ANSWERs.Where(x => x.Question_Or_Requirement_Id == questionID).Count() > 0)
                {
                    return true;
                }
            }

            return false;
        }


        /// <summary>
        /// Updates the question text.  Only questions originally attached
        /// to a 'custom' set can have their text updated.
        /// </summary>
        public void UpdateHeadingText(int pairID, string text)
        {
            using (var db = new CSETWebEntities())
            {
                var usch = db.UNIVERSAL_SUB_CATEGORY_HEADINGS.Where(x => x.Heading_Pair_Id == pairID).FirstOrDefault();

                if (usch == null)
                {
                    return;
                }

                usch.Sub_Heading_Question_Description = string.IsNullOrEmpty(text) ? null : text;
                db.UNIVERSAL_SUB_CATEGORY_HEADINGS.AddOrUpdate(usch);
                db.SaveChanges();
            }
        }


        /// <summary>
        /// Try to determine if this an encrypted question.
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        private bool IsTextEncrypted(string text)
        {
            if (!text.Contains(" ") && text.Length > 10)
            {
                return true;
            }

            return false;
        }


        /// <summary>
        /// Returns a structure of categories/subcategories/requirements for the standard.
        /// </summary>
        /// <param name="setName"></param>
        /// <returns></returns>
        public StandardsResponse GetStandardStructure(string setName)
        {
            StandardsResponse response = new StandardsResponse();

            List<NEW_REQUIREMENT> reqs = new List<NEW_REQUIREMENT>();

            using (var db = new CSETWebEntities())
            {
                var set = db.SETS.Where(x => x.Set_Name == setName).FirstOrDefault();
                response.SetFullName = set.Full_Name;
                response.SetShortName = set.Short_Name;
                response.SetDescription = set.Standard_ToolTip;


                var q = from rs in db.REQUIREMENT_SETS
                        from s in db.SETS.Where(x => x.Set_Name == rs.Set_Name)
                        from r in db.NEW_REQUIREMENT.Where(x => x.Requirement_Id == rs.Requirement_Id)
                        where rs.Set_Name == setName
                        select new { r, rs, s };
                var results = q.Distinct()
                    .OrderBy(x => x.s.Short_Name)
                    .ThenBy(x => x.rs.Requirement_Sequence)
                    .Select(x => x.r);


                reqs.AddRange(results);


                string currentCategory = string.Empty;
                RequirementListCategory cat = null;
                string currentSubcategory = string.Empty;
                RequirementListSubcategory subcat = null;


                foreach (NEW_REQUIREMENT rq in reqs)
                {
                    Requirement r = new Requirement()
                    {
                        RequirementID = rq.Requirement_Id,
                        Title = rq.Requirement_Title,
                        RequirementText = rq.Requirement_Text
                    };

                    // Get the SAL levels for this requirement
                    var sals = db.REQUIREMENT_LEVELS.Where(l => l.Requirement_Id == rq.Requirement_Id).ToList();
                    foreach (REQUIREMENT_LEVELS l in sals)
                    {
                        r.SalLevels.Add(l.Standard_Level);
                    }


                    // Group into Category/Subcategory structure
                    if (rq.Standard_Category != currentCategory)
                    {
                        cat = new RequirementListCategory
                        {
                            CategoryName = rq.Standard_Category
                        };

                        response.Categories.Add(cat);
                        currentCategory = rq.Standard_Category;
                    }


                    if (rq.Standard_Sub_Category != currentSubcategory)
                    {
                        subcat = new RequirementListSubcategory
                        {
                            SubcategoryName = rq.Standard_Sub_Category
                        };

                        cat.Subcategories.Add(subcat);
                        currentSubcategory = rq.Standard_Sub_Category;
                    }

                    subcat.Requirements.Add(r);
                }
            }

            return response;
        }


        /// <summary>
        /// Creates a NEW_REQUIREMENT record for the set.  Creates new category/subcategory records as needed.
        /// </summary>
        /// <param name="parms"></param>
        public Requirement CreateRequirement(Requirement parms)
        {
            using (var db = new CSETWebEntities())
            {
                // Create the category if not already defined
                var existingCategory = db.STANDARD_CATEGORY.Where(x => x.Standard_Category1 == parms.Category).FirstOrDefault();
                if (existingCategory == null)
                {
                    STANDARD_CATEGORY newCategory = new STANDARD_CATEGORY()
                    {
                        Standard_Category1 = parms.Category
                    };
                    db.STANDARD_CATEGORY.Add(newCategory);
                }

                // Create the subcategory if not already defined
                var existingSubcategory = db.UNIVERSAL_SUB_CATEGORIES.Where(x => x.Universal_Sub_Category == parms.Subcategory).FirstOrDefault();
                if (existingSubcategory == null)
                {
                    UNIVERSAL_SUB_CATEGORIES newSubcategory = new UNIVERSAL_SUB_CATEGORIES()
                    {
                        Universal_Sub_Category = parms.Subcategory
                    };
                    db.UNIVERSAL_SUB_CATEGORIES.Add(newSubcategory);
                }

                db.SaveChanges();


                NEW_REQUIREMENT req = new NEW_REQUIREMENT
                {
                    Requirement_Title = parms.Title,
                    Requirement_Text = parms.RequirementText,
                    Standard_Category = parms.Category,
                    Standard_Sub_Category = parms.Subcategory,
                    Question_Group_Heading_Id = parms.QuestionGroupHeadingID,
                    Original_Set_Name = parms.SetName
                };

                db.NEW_REQUIREMENT.Add(req);
                db.SaveChanges();

                parms.RequirementID = req.Requirement_Id;


                // Determine a new sequence number
                int sequence = 1;
                var seqList = db.REQUIREMENT_SETS
                    .Where(x => x.Set_Name == parms.SetName)
                    .Select(x => x.Requirement_Sequence).ToList();
                if (seqList.Count > 0)
                {
                    sequence = seqList.Max() + 1;
                }


                REQUIREMENT_SETS rs = new REQUIREMENT_SETS
                {
                    Requirement_Id = req.Requirement_Id,
                    Set_Name = parms.SetName,
                    Requirement_Sequence = sequence
                };

                db.REQUIREMENT_SETS.Add(rs);
                db.SaveChanges();
            }

            return parms;
        }


        /// <summary>
        /// Gets a Requirement for the specified Set and ID
        /// </summary>
        /// <param name="setName"></param>
        /// <param name="reqID"></param>
        /// <returns></returns>
        public Requirement GetRequirement(string setName, int reqID)
        {
            using (var db = new CSETWebEntities())
            {
                var q = from rs in db.REQUIREMENT_SETS
                        from s in db.SETS.Where(x => x.Set_Name == rs.Set_Name)
                        from r in db.NEW_REQUIREMENT.Where(x => x.Requirement_Id == rs.Requirement_Id)
                        where rs.Set_Name == setName && rs.Requirement_Id == reqID
                        select r;

                var result = q.FirstOrDefault();

                if (result == null)
                {
                    return null;
                }

                Requirement requirement = new Requirement
                {
                    Category = result.Standard_Category,
                    Subcategory = result.Standard_Sub_Category,
                    Title = result.Requirement_Title,
                    RequirementID = result.Requirement_Id,
                    RequirementText = result.Requirement_Text,
                    QuestionGroupHeadingID = result.Question_Group_Heading_Id,
                    SetName = setName,
                    SupplementalInfo = result.Supplemental_Info
                };

                // Get the SAL levels for this requirement
                var sals = db.REQUIREMENT_LEVELS.Where(l => l.Requirement_Id == requirement.RequirementID).ToList();
                foreach (REQUIREMENT_LEVELS l in sals)
                {
                    requirement.SalLevels.Add(l.Standard_Level);
                }


                // Get the Reference documents for this requirement
                var allDocs = GetReferencesForRequirement(requirement.RequirementID);
                requirement.SourceDocs = allDocs.SourceDocs;
                requirement.ResourceDocs = allDocs.ResourceDocs;



                // Get the questions for this requirement
                var relatedQuestions = db.REQUIREMENT_QUESTIONS_SETS
                    .Where(x => x.Requirement_Id == requirement.RequirementID && x.Set_Name == setName).ToList();

                foreach (var q1 in relatedQuestions)
                {
                    requirement.Questions.Add(new QuestionDetail()
                    {
                        QuestionID = q1.Question_Id,
                        QuestionText = q1.NEW_QUESTION.Simple_Question,
                        IsCustom = db.SETS.Where(x => x.Set_Name == q1.NEW_QUESTION.Original_Set_Name).FirstOrDefault().Is_Custom
                    });
                }

                return requirement;
            }
        }


        /// <summary>
        /// Returns two lists -- reference documents that are 'source' 
        /// and 'resource'.
        /// </summary>
        /// <param name="reqID"></param>
        /// <returns></returns>
        private ReferenceDocLists GetReferencesForRequirement(int reqID)
        {
            using (var db = new CSETWebEntities())
            {
                // Get all "source" documents
                List<ReferenceDoc> sourceList = new List<ReferenceDoc>();
                var sources = db.REQUIREMENT_SOURCE_FILES.Where(x => x.Requirement_Id == reqID).ToList();
                foreach (REQUIREMENT_SOURCE_FILES reff in sources)
                {
                    sourceList.Add(new ReferenceDoc
                    {
                        SectionRef = reff.Section_Ref,
                        ID = reff.Gen_File_Id,
                        Title = reff.GEN_FILE.Title,
                        Name = reff.GEN_FILE.Name,
                        ShortName = reff.GEN_FILE.Short_Name,
                        FileName = reff.GEN_FILE.File_Name,
                        DocumentNumber = reff.GEN_FILE.Doc_Num,
                        DocumentVersion = reff.GEN_FILE.Doc_Version,
                        PublishDate = reff.GEN_FILE.Publish_Date,
                        Summary = reff.GEN_FILE.Summary,
                        Description = reff.GEN_FILE.Description,
                        Comments = reff.GEN_FILE.Comments,
                    });
                }

                // Get all "resource" documents
                List<ReferenceDoc> resourceList = new List<ReferenceDoc>();
                var resources = db.REQUIREMENT_REFERENCES.Where(x => x.Requirement_Id == reqID).ToList();
                foreach (REQUIREMENT_REFERENCES reff in resources)
                {
                    resourceList.Add(new ReferenceDoc
                    {
                        SectionRef = reff.Section_Ref,
                        ID = reff.Gen_File_Id,
                        Title = reff.GEN_FILE.Title,
                        Name = reff.GEN_FILE.Name,
                        ShortName = reff.GEN_FILE.Short_Name,
                        FileName = reff.GEN_FILE.File_Name,
                        DocumentNumber = reff.GEN_FILE.Doc_Num,
                        DocumentVersion = reff.GEN_FILE.Doc_Version,
                        PublishDate = reff.GEN_FILE.Publish_Date,
                        Summary = reff.GEN_FILE.Summary,
                        Description = reff.GEN_FILE.Description,
                        Comments = reff.GEN_FILE.Comments,
                    });
                }

                // Package the two lists together
                ReferenceDocLists response = new ReferenceDocLists();
                response.SourceDocs = sourceList;
                response.ResourceDocs = resourceList;
                return response;
            }
        }


        /// <summary>
        /// Updates the NEW_REQUIREMENT record for the set.  Creates new category/subcategory records as needed.
        /// </summary>
        /// <param name="parms"></param>
        public Requirement UpdateRequirement(Requirement parms)
        {
            using (var db = new CSETWebEntities())
            {
                // Create the category if not already defined
                var existingCategory = db.STANDARD_CATEGORY.Where(x => x.Standard_Category1 == parms.Category).FirstOrDefault();
                if (existingCategory == null)
                {
                    STANDARD_CATEGORY newCategory = new STANDARD_CATEGORY()
                    {
                        Standard_Category1 = parms.Category
                    };
                    db.STANDARD_CATEGORY.Add(newCategory);
                }

                // Create the subcategory if not already defined
                var existingSubcategory = db.UNIVERSAL_SUB_CATEGORIES.Where(x => x.Universal_Sub_Category == parms.Subcategory).FirstOrDefault();
                if (existingSubcategory == null)
                {
                    UNIVERSAL_SUB_CATEGORIES newSubcategory = new UNIVERSAL_SUB_CATEGORIES()
                    {
                        Universal_Sub_Category = parms.Subcategory
                    };
                    db.UNIVERSAL_SUB_CATEGORIES.Add(newSubcategory);
                }

                db.SaveChanges();

                NEW_REQUIREMENT req = db.NEW_REQUIREMENT.Where(x => x.Requirement_Id == parms.RequirementID).FirstOrDefault();
                req.Requirement_Title = parms.Title;
                req.Requirement_Text = parms.RequirementText;
                req.Standard_Category = parms.Category;
                req.Standard_Sub_Category = parms.Subcategory;
                req.Question_Group_Heading_Id = parms.QuestionGroupHeadingID;
                req.Original_Set_Name = parms.SetName;
                req.Supplemental_Info = parms.SupplementalInfo;


                db.NEW_REQUIREMENT.AddOrUpdate(req);
                db.SaveChanges();
            }

            return parms;
        }


        /// <summary>
        /// Removes the NEW_REQUIREMENT record from the set.
        /// 
        /// TODO:  Actually delete the NEW_REQUIREMENT record?
        /// </summary>
        /// <param name="parms"></param>
        public void RemoveRequirement(Requirement parms)
        {
            using (var db = new CSETWebEntities())
            {
                var bridge = db.REQUIREMENT_SETS.Where(x => x.Set_Name == parms.SetName && x.Requirement_Id == parms.RequirementID).FirstOrDefault();
                if (bridge == null)
                {
                    return;
                }

                db.REQUIREMENT_SETS.Remove(bridge);

                var req = db.NEW_REQUIREMENT.Where(x => x.Requirement_Id == parms.RequirementID).FirstOrDefault();
                if (req == null)
                {
                    return;
                }

                db.NEW_REQUIREMENT.Remove(req);
                db.SaveChanges();
            }
        }


        /// <summary>
        /// Returns a collection of reference documents.
        /// Reference documents attached to the set are marked as selected.
        /// </summary>
        /// <returns></returns>
        public List<ReferenceDoc> GetReferenceDocs(string setName, string filter)
        {
            if (filter == null)
            {
                filter = "";
            }

            List<ReferenceDoc> list = new List<ReferenceDoc>();
            using (var db = new CSETWebEntities())
            {
                var genFileList = db.GEN_FILE.Where(x => x.Title.Contains(filter)).ToList().OrderBy(x => x.Title).ToList();

                var selectedFiles = db.SET_FILES.Where(x => x.SetName == setName).ToList().Select(y => y.Gen_File_Id);

                foreach (var f in genFileList)
                {
                    list.Add(new ReferenceDoc
                    {
                        ID = f.Gen_File_Id,
                        FileName = f.File_Name,
                        Title = f.Title,
                        Selected = selectedFiles.Contains(f.Gen_File_Id),

                        IsCustom = (f.Gen_File_Id > 3866)

                    });
                }
            }

            return list;
        }


        /// <summary>
        /// Returns the list of reference docs attached to the set. 
        /// </summary>
        /// <param name="setName"></param>
        /// <returns></returns>
        public List<ReferenceDoc> GetReferenceDocsForSet(string setName)
        {
            using (var db = new CSETWebEntities())
            {
                var query = from sf in db.SET_FILES
                            join gf in db.GEN_FILE on sf.Gen_File_Id equals gf.Gen_File_Id
                            where sf.SetName == setName
                            select gf;
                var files = query.ToList();

                List<ReferenceDoc> list = new List<ReferenceDoc>();
                foreach (GEN_FILE f in files)
                {
                    ReferenceDoc doc = new ReferenceDoc
                    {
                        Title = f.Title,
                        FileName = f.File_Name,
                        ID = f.Gen_File_Id
                    };

                    list.Add(doc);
                }

                return list;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ReferenceDoc GetReferenceDocDetail(int id)
        {
            using (var db = new CSETWebEntities())
            {
                var dbDoc = db.GEN_FILE.Where(x => x.Gen_File_Id == id).FirstOrDefault();
                ReferenceDoc doc = new ReferenceDoc
                {
                    ID = dbDoc.Gen_File_Id,
                    Title = dbDoc.Title,
                    FileName = dbDoc.File_Name,
                    Name = dbDoc.Name,
                    ShortName = dbDoc.Short_Name,
                    DocumentNumber = dbDoc.Doc_Num,
                    PublishDate = dbDoc.Publish_Date,
                    DocumentVersion = dbDoc.Doc_Version,
                    Summary = dbDoc.Summary,
                    Description = dbDoc.Description,
                    Comments = dbDoc.Comments
                };


                doc.IsCustom = (doc.ID > 3866);
                // How can we define 'custom' files?


                return doc;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        public void UpdateReferenceDocDetail(ReferenceDoc doc)
        {
            using (var db = new CSETWebEntities())
            {
                var dbDoc = db.GEN_FILE.Where(x => x.Gen_File_Id == doc.ID).FirstOrDefault();
                if (dbDoc == null)
                {
                    return;
                }

                dbDoc.Title = string.IsNullOrEmpty(doc.Title) ? "(no title)" : doc.Title;
                dbDoc.Name = string.IsNullOrEmpty(doc.Name) ? "(no name)" : doc.Name;
                dbDoc.Short_Name = doc.ShortName;
                dbDoc.Doc_Num = doc.DocumentNumber;
                dbDoc.Publish_Date = doc.PublishDate;
                dbDoc.Doc_Version = doc.DocumentVersion;
                // dbDoc.Source_Type = doc.sourcetype
                dbDoc.Summary = doc.Summary;
                dbDoc.Description = doc.Description;
                dbDoc.Comments = doc.Comments;

                db.GEN_FILE.AddOrUpdate(dbDoc);
                db.SaveChanges();
            }
        }


        /// <summary>
        /// Creates or deletes the SET_FILE row tying the document to the set.
        /// </summary>
        public void SelectSetFile(SetFileSelection parms)
        {
            using (var db = new CSETWebEntities())
            {
                if (parms.Doc.Selected)
                {
                    SET_FILES sf = new SET_FILES
                    {
                        SetName = parms.SetName,
                        Gen_File_Id = parms.Doc.ID
                    };
                    db.SET_FILES.Add(sf);
                }
                else
                {
                    var setFile = db.SET_FILES.Where(x => x.SetName == parms.SetName && x.Gen_File_Id == parms.Doc.ID).FirstOrDefault();
                    db.SET_FILES.Remove(setFile);
                }

                db.SaveChanges();
            }
        }


        /// <summary>
        /// Either add or delete the reference document to the requirement.
        /// Returns the new list.
        /// </summary>
        public ReferenceDocLists AddDeleteRefDocToRequirement(int requirementId, int docId, bool isSourceRef, string bookmark, bool add)
        {
            if (bookmark == null)
            {
                bookmark = string.Empty;
            }

            using (var db = new CSETWebEntities())
            {
                if (isSourceRef)
                {
                    var reqref = db.REQUIREMENT_SOURCE_FILES
                            .Where(x => x.Requirement_Id == requirementId && x.Gen_File_Id == docId && x.Section_Ref == bookmark).FirstOrDefault();

                    if (add)
                    {
                        if (reqref == null)
                        {
                            // Create a new one
                            reqref = new REQUIREMENT_SOURCE_FILES
                            {
                                Gen_File_Id = docId,
                                Requirement_Id = requirementId,
                                Section_Ref = bookmark.TrimStart('#')
                            };
                            db.REQUIREMENT_SOURCE_FILES.Add(reqref);
                            db.SaveChanges();
                        }
                    }
                    else
                    {
                        // Delete reference
                        if (reqref != null)
                        {
                            db.REQUIREMENT_SOURCE_FILES.Remove(reqref);
                            db.SaveChanges();
                        }
                    }
                }
                else
                {
                    var reqref = db.REQUIREMENT_REFERENCES
                            .Where(x => x.Requirement_Id == requirementId && x.Gen_File_Id == docId && x.Section_Ref == bookmark).FirstOrDefault();

                    if (add)
                    {
                        if (reqref == null)
                        {
                            // Create a new one
                            reqref = new REQUIREMENT_REFERENCES
                            {
                                Gen_File_Id = docId,
                                Requirement_Id = requirementId,
                                Section_Ref = bookmark.TrimStart('#')
                            };
                            db.REQUIREMENT_REFERENCES.Add(reqref);
                            db.SaveChanges();
                        }
                        else
                        {
                            // reference record already exists
                        }
                    }
                    else
                    {
                        // Delete reference
                        if (reqref != null)
                        {
                            db.REQUIREMENT_REFERENCES.Remove(reqref);
                            db.SaveChanges();
                        }
                    }
                }
            }

            return GetReferencesForRequirement(requirementId);
        }


        /// <summary>
        /// Saves the physical document and defines it in the database.
        /// Returns the ID of the new GEN_FILE row.
        /// </summary>
        public int RecordDocInDB(string setName, string filename, string contentType, int fileSize)
        {
            using (var db = new CSETWebEntities())
            {
                // Determine file type ID.  Store null if not known.
                int? fileType = null;

                var type = db.FILE_TYPE.Where(x => x.Mime_Type == contentType).FirstOrDefault();
                if (type != null)
                {
                    fileType = (int)type.File_Type_Id;
                }


                GEN_FILE gf = new GEN_FILE
                {
                    File_Name = filename,
                    Title = "(no title)",
                    File_Type_Id = fileType,
                    File_Size = fileSize,
                    Doc_Num = "NONE",
                    Short_Name = "(no short name)"
                };
                db.GEN_FILE.Add(gf);
                db.SaveChanges();


                SET_FILES sf = new SET_FILES
                {
                    SetName = setName,
                    Gen_File_Id = gf.Gen_File_Id
                };
                db.SET_FILES.Add(sf);
                db.SaveChanges();

                return gf.Gen_File_Id;
            }
        }
    }
}
