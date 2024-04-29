﻿//////////////////////////////// 
// 
//   Copyright 2024 Battelle Energy Alliance, LLC  
// 
// 
//////////////////////////////// 

using System;
using System.Collections.Generic;

namespace CSETWebCore.Business.Demographic.DemographicIO.Models
{
    public class UploadDemographicsModel
    {
        public List<jDEMOGRAPHICS> jDEMOGRAPHICS { get; set; }
        public List<jDETAILS_DEMOGRAPHICS> jDETAILS_DEMOGRAPHICS { get; set; }
        public List<jCIS_CSI_ORGANIZATION_DEMOGRAPHICS> jCIS_CSI_ORGANIZATION_DEMOGRAPHICS { get; set; }
        public List<jCIS_CSI_SERVICE_COMPOSITION> jCIS_CSI_SERVICE_COMPOSITION { get; set; }
        public List<jCIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS> jCIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS { get; set; }
        public List<jCIS_CSI_SERVICE_DEMOGRAPHICS> jCIS_CSI_SERVICE_DEMOGRAPHICS { get; set; }

        public UploadDemographicsModel()
        {
            this.jCIS_CSI_SERVICE_DEMOGRAPHICS = new List<jCIS_CSI_SERVICE_DEMOGRAPHICS>();
            this.jCIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS = new List<jCIS_CSI_SERVICE_COMPOSITION_SECONDARY_DEFINING_SYSTEMS>();
            this.jCIS_CSI_SERVICE_COMPOSITION = new List<jCIS_CSI_SERVICE_COMPOSITION>();
            this.jCIS_CSI_ORGANIZATION_DEMOGRAPHICS = new List<jCIS_CSI_ORGANIZATION_DEMOGRAPHICS>();
            this.jDEMOGRAPHICS = new List<jDEMOGRAPHICS>();
            this.jDETAILS_DEMOGRAPHICS = new List<jDETAILS_DEMOGRAPHICS>();
        }
    }
 }
    


