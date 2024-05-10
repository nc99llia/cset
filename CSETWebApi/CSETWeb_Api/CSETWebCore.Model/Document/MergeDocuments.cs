﻿using CSETWebCore.DataLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSETWebCore.Model.Document
{
    public class MergeDocuments
    {
        public MergeDocuments() { }

        public MergeDocuments(int assessmentId, List<Document> documents)
        {
            this.assessmentId = assessmentId;
            this.documents = documents;
        }


        public int assessmentId { get; set; }
        public List<Document> documents { get; set; }
    }
}
