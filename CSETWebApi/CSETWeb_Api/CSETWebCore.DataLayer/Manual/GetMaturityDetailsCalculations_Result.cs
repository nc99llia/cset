﻿//////////////////////////////// 
// 
//   Copyright 2022 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 

namespace CSETWebCore.DataLayer.Model
{
    public class GetMaturityDetailsCalculations_Result
    {
        public int grouporder { get; set; }
        public int Total { get; set; }
        public string Domain { get; set; }
        public string AssessmentFactor { get; set; }
        public string FinComponent { get; set; }
        public string MaturityLevel { get; set; }
        public string Answer_Text { get; set; }
        public int acount { get; set; }
        public double AnswerPercent { get; set; }
        public bool Complete { get; set; }
    }
}
