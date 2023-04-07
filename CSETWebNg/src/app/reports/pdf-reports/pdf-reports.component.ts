////////////////////////////////
//
//   Copyright 2023 Battelle Energy Alliance, LLC
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//
////////////////////////////////
import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
import { pdfMake } from 'pdfmake/build/pdfmake';
import { pdfFonts } from 'pdfmake/build/vfs_fonts';
import { htmlToPdfmake } from 'html-to-pdfmake';
import { ReportService } from '../../services/report.service';
import { result } from 'lodash';
import { HttpClient } from '@angular/common/http';
import html2canvas from 'html2canvas';



@Component({
    selector: 'app-pdf-reports',
    templateUrl: './pdf-reports.component.html',
    styleUrls: ['../reports.scss']
  })

export class PdfReportsComponent implements OnInit {
  // Input Data
  @Input() assessmentInfo;
  @Input() donutData;
  @Input() tableData;


  // PDF images & variables
  pdfDocument: any = null;

  coverImage: any = null; // Front C2M2 cover
  reportGeneratedDate: Date; // Section 1 assessment information

  managementActivitiesData = []; // Section 3.2 Table data
  tableTwoStructure = []; // Section 3.2 pdfmake JSON

  selfEvalCirlces: any = null;
  
  milAchievementData: any[] = [];
  milAchievementChart: any = null;


  // Style Variables
  normalSpacing = 12;
  smallSpacing = 6;
  largeSpacing = 24;
  extraLargeSpacing = 36;

  milAchievementColorScheme = {
    domain: ['#0A5278']
  };


  constructor(
    public reportSvc: ReportService,
    private http: HttpClient,
  ) {}


  ngOnInit(): void {
    this.reportGeneratedDate = new Date();
    this.getBase64('assets/images/C2M2/C2M2-Report-Cover-Sheet.png');
    this.getMilAchievementChartData();
    this.getManagementActivitiesData();
  }

  getBase64(path: string) {
    // Grab Cover Image Base 64
    this.http.get(path, { responseType: 'blob' })
    .subscribe(blob => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        this.coverImage = "<img width='700' src='" + event.target.result + "'>";
      }
      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
      };
    });
  }

  getMilAchievementChartData() {
    this.donutData.forEach(domain => {
      this.milAchievementData.push({name: domain.shortTitle, value: domain.milAchieved});
    });
  }

  getManagementActivitiesData() {
    for (let i = 0; i < this.tableData.managementQuestions.length; i++) {
      for (let j = 0; j < this.tableData.managementQuestions[i].domainAnswers.length; j++) {
        if (this.tableData.managementQuestions[i].domainAnswers[j].answer == null) {
          this.tableData.managementQuestions[i].domainAnswers[j].answer = "U";
        }
        this.managementActivitiesData.push(this.tableData.managementQuestions[i].domainAnswers[j].answer);
      }
    }

    this.buildTable2Structure();
  }

  buildTable2Structure() {
    for (let k = 0; k < this.managementActivitiesData.length; k++) {
      let fillColor = 'white';
      let textColor = 'black';

      if (this.managementActivitiesData[k] === 'FI') {
        fillColor = '#005c99';
        textColor = 'white';
      } else if (this.managementActivitiesData[k] === 'LI') {
        fillColor = '#8ba6ca';
      } else if (this.managementActivitiesData[k] === 'PI') {
        fillColor = '#fad980';
      } else if (this.managementActivitiesData[k] === 'NI') {
        fillColor = '#e69f00';
      } else if (this.managementActivitiesData[k] === 'U') {
        this.managementActivitiesData[k] = 'U';
        fillColor = '#E6E6E6';
      }

      this.tableTwoStructure.push( {text: this.managementActivitiesData[k], alignment: 'center', marginTop: 10, fillColor: fillColor, color: textColor } );
    }

  }


  generatePdf() {
    let normalSpacing = 12;
    let smallSpacing = 6;
    let largeSpacing = 24;
    let extraLargeSpacing = 36;
    
    let pdfMake = require('pdfmake/build/pdfmake.js');
    let pdfFonts = require('pdfmake/build/vfs_fonts.js');
    let htmlToPdfmake = require('html-to-pdfmake');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    let reportCover = htmlToPdfmake(this.coverImage);

    // Section 3.2 Table Vertical Headers
    let assetSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">ASSET</text></svg>' };
    let threatSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">THREAT</text></svg>' };
    let riskSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">RISK</text></svg>' };
    let accessSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">ACCESS</text></svg>' };
    let situationSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">SITUATION</text></svg>' };
    let responseSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">RESPONSE</text></svg>' };
    let thirdpartySvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">THIRD-PARTIES</text></svg>' };
    let workforceSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">WORKFORCE</text></svg>' };
    let architectureSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">ARCHITECTURE</text></svg>' };
    let programSvg = { svg: '<svg height="120" width="200"><text x="-118" y="20" fill="black" transform="rotate(-90)">PROGRAM</text></svg>' };
    

    this.pdfDocument = {
      content: [
        // Cover Image Here
        reportCover,
        { text: '', pageBreak: 'after' },
        
        // Notification Page
        { text: 'Notification', style: 'header', marginBottom: largeSpacing },
        { text: 'This report is provided “as is” for informational purposes only. The Department of Energy (DOE) does not provide any warranties of any kind regarding any information contained within. In no event shall the United States Government or its contractors or subcontractors be liable for any damages, including, but not limited to, direct, indirect, special, or consequential damages and including damages based on any negligence of the United States Government or its contractors or subcontractors, arising out of, resulting from, or in any way connected with this report, whether or not based upon warranty, contract, tort, or otherwise, whether or not injury was sustained from, or arose out of the results of, or reliance upon the report.', marginBottom: normalSpacing},
        { text: 'DOE does not endorse any commercial product or service, including the subject of the analysis in this report. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation, or favoring by the agencies.', marginBottom: normalSpacing},
        { text: 'The display of the DOE official seal or other visual identities on this report shall not be interpreted to provide the recipient organization authorization to use the official seal, insignia, or other visual identities of the Department. The DOE seal, insignia, or other visual identities shall not be used in any manner to imply endorsement of any commercial product or activity by DOE or the United States Government. Use of the DOE seal without proper authorization violates federal law (e.g., 18 U.S.C. §§ 506, 701, 1017), and is against DOE policies governing usage of its seal.', marginBottom: normalSpacing},
        { text: '', pageBreak: 'after' },
        
        // Section 1: Introduction
        { text: '1. Introduction', style: 'header', marginBottom: largeSpacing },
        { text: 'The Cybersecurity Capability Maturity Model (C2M2) can help organizations of all sectors, types, and sizes to evaluate and make improvements to their cybersecurity programs and strengthen their operational resilience. This report presents the results of a C2M2 self-evaluation. The results included in this report may be used to measure and improve an existing cybersecurity program. It also may serve as an input for other activities, such as informing cybersecurity risk managers about the controls in place to mitigate cybersecurity risks within an organization.', marginBottom: normalSpacing },
        { text: 'The results presented in this report are based on participant responses describing the degree to which C2M2 practices are implemented. This report may include sensitive information and should be protected accordingly.', marginBottom: extraLargeSpacing },
        { text: 'Assessment Information: ', marginBottom: largeSpacing },
        { text: 'ASSESSMENT NAME:' },
        { text: this.assessmentInfo?.assessment_Name, marginBottom: largeSpacing },
        { text: 'SELF-EVALUATION DATE:' },
        { text: this.assessmentInfo?.assessment_Date, marginBottom: largeSpacing },
        { text: 'ASSESSOR NAME:' },
        { text: this.assessmentInfo?.assessor_Name, marginBottom: largeSpacing },
        { text: 'This report was generated by CSET® on ' + this.reportGeneratedDate , italics: true }, 
        { text: '', pageBreak: 'after' },
        
        // Section 2: Model Architecture
        { text: '2. Model Architecture', style: 'header', marginBottom: largeSpacing },
        { text: 'The model is organized into 10 domains. Each domain is a logical grouping of cybersecurity practices. The practices within a domain are grouped by objective - target achievements that support the domain. Within each objective, the practices are ordered by maturity indicator levels (MILs).', marginBottom: normalSpacing },
        { text: 'The following section include additional information about the domains and the MILs.' },
        { text: '', pageBreak: 'after' },
        
        // Section 2.1: Domains, Objectives, and Practices
        { text: '2.1 Domains, Objectives, and Practices', style: 'header', marginBottom: largeSpacing },
        { text: 'The C2M2 includes 356 cybersecurity practices, which are grouped into 10 domains. These practices represent the activities an organization can perform to establish and mature capability in the domain. For example, the Asset, Change, and Configuration Management domain is a group of practices that an organization can perform to establish and mature asset management, change management, and configuration management capabilities.', marginBottom: normalSpacing },
        { text: 'The practices within each domain are organized into objectives, which represent achievements that support the domain. For example, the Asset, Change, and Configuration Management domain comprises five objectives:', marginBottom: normalSpacing },
        { text: '',
            ol: [
                'Manage IT and OT Asset Inventory',
                'Manage Information Asset Inventory',
                'Manage IT and OT Asset Configurations',
                'Manage Changes to IT and OT Assets',
                'Management Activities for the ASSET domain',
            ],
            marginBottom: normalSpacing
        },
        { text: 'Each of the objectives in a domain comprises a set of practices, which are ordered by MIL. Figure 1 sumarizes the elements of each domain.', marginBottom: largeSpacing },
        { svg: '<svg width="535" viewBox="0 150 895 444"><title id="MIL_DefinitionTitle">Model Architecture</title><desc id="MIL_DefinitionDesc">Figure 1: Model and Domain Elements. A graphic representation of the Model, Domain and Objective hierarchy and associated Maturity Indicator Levels. Model contains 10 domains. Each domain contains Approach Objectives, one or more, unique to each domain. Approach Objectives are supported by a progression of practices that are unique to the domain. Each domain contains a Management Objective and this is similar in each domain. Each Management Objective is supported by a progression of practices that are similar in each domain and describe institutionalization activities.</desc><path fill="none" stroke="#737373" stroke-width="4" d="M366 440v99a16 16 0 0016 16h32 M366 440v32a16 16 0 0016 16h32 M190 105v300a16 16 0 0016 16h32 M366 172v166a16 16 0 0016 16h32 M366 172v99a16 16 0 0016 16h32 M366 172v32a16 16 0 0016 16h32 M190 105v32a16 16 0 0016 16h32 M64 38v32a16 16 0 0016 16h32"></path><g fill="#FFF" font-weight="bold" text-anchor="middle"><g transform="translate(64 25)"><rect x="-64" y="-25" width="128" height="38" fill="#292929" rx="4"></rect><text>Model</text></g><g transform="translate(190 92)"><rect x="-78" y="-25" width="156" height="38" fill="#4d4d4d" rx="4"></rect><text>Domain</text></g><g transform="translate(366 159)"><rect id="a" x="-128" y="-25" width="256" height="38" fill="#666666" rx="4"></rect><text>Approach Objectives</text></g><g transform="translate(522 226)"><rect id="b" x="-108" y="-25" width="216" height="38" fill="#8c8c8c" rx="4"></rect><text>Practices at MIL1</text></g><g transform="translate(522 293)"><use href="#b"></use><text>Practices at MIL2</text></g><g transform="translate(522 360)"><use href="#b"></use><text>Practices at MIL3</text></g><g transform="translate(366 427)"><use href="#a"></use><text>Management Objectives</text></g><g transform="translate(522 494)"><use href="#b"></use><text>Practices at MIL2</text></g><g transform="translate(522 561)"><use href="#b"></use><text>Practices at MIL3</text></g></g><g fill="currentColor"><text x="294" y="89">Model contains 10 domains</text><text transform="translate(518 149)">(one or more per domain)<tspan x="0" dy="19">Unique to each domain</tspan></text><text transform="translate(654 264)">Approach objectives are<tspan x="0" dy="19">supported by a progression of</tspan><tspan x="0" dy="19">practices that are unique to</tspan><tspan x="0" dy="19">the domain</tspan></text><text transform="translate(518 417)">(one per domain)<tspan x="0" dy="19">Similar in each domain</tspan></text><text transform="translate(654 489)">Each management objective<tspan x="0" dy="19">is supported by a progression</tspan><tspan x="0" dy="19">of practices that are similar in</tspan><tspan x="0" dy="19">each domain and describe</tspan><tspan x="0" dy="19">institutionalization activities</tspan></text></g></svg>' },
        { text: 'Figure 1: Model and Domain Elements', style: 'caption', marginTop: -85, pageBreak: 'after' },
        { text: 'For each domain, this report provides a purpose statement, which is a high-level summary of the intent of the domain. Further guidance for each of the domains, such as introductory discussions and example scenarios is provided in the C2M2 V2.1 model document.', marginBottom: normalSpacing },
        { text: 'The purpose statement for each of the 10 domains follows in the order in which the domains appear in the model and in this report. Next to each of the domain names, a short name is provided that is used throughout the model.', marginBottom: largeSpacing },
        
        { text: 'Domain: Asset, Change, and Configuration Management (ASSET)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Manage the organization\'s IT and OT assets, including both hardware and software, and information assets commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Threat and Vulnerability Management (THREAT)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain plans, procedures, and technologies to detect, identify, analyze, manage, and respond to cybersecurity threats and vulnerabilities, commensurate with the risk to the organization\'s infrastructure (such as critical, IT, and operational) and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Risk Management (RISK)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish, operate, and maintain an enterprise cyber risk management program to identify, analyze, and respond to cyber risk the organization is subject to, including its business units, subsidiaries, related interconnected infrastructure, and stakeholders.', marginBottom: largeSpacing },
        { text: 'Domain: Identify and Access Management (ACCESS)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Create and manage identities for entities that may be granted logical or physical access to the organization\'s assets. Control access to the organization\'s assets, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Situational Awareness (SITUATION)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain activities and technologies to collect, monitor, analyze, alarm, report, and use operational, security, and threat information, including status and summary information from the other model domains, to establish situational awareness for both the organization\'s operational state and cybersecurity state.', marginBottom: largeSpacing },
        { text: 'Domain: Event and Incident Response, Continuity of Operations (RESPONSE)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain plans, procedures, and technologies to detect, analyze, mitigate, respond to, and recover from cybersecurity events and incidents and to sustain operations during cybersecurity incidents, commensurate with the risk to critical infrastructure and organizational objectives', marginBottom: largeSpacing },
        { text: 'Domain: Third-Party Risk Management (THIRD-PARTIES)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain controls to manage the cyber risks arising from suppliers and other third parties, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Workforce Management (WORKFORCE)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain plans, procedures, technologies, and controls to create a culture of cybersecurity and to ensure the ongoing suitability and competence of personnel, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Cybersecurity Architecture (ARCHITECTURE)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain the structure and behavior of the organization\'s cybersecurity architecture, including controls, processes, technologies, and other elements, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: largeSpacing },
        { text: 'Domain: Cybersecurity Program Management (PROGRAM)', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'Establish and maintain an enterprise cybersecurity program that provides governance, strategic planning, and sponsorship for the organization\'s cybersecurity activities in a manner that aligns cybersecurity objectives with both the organization\'s strategic objectives and the risk to critical infrastructure', marginBottom: largeSpacing },
        { text: 'For a more in-depth discussion of the C2M2 domains, refer to the C2M2 V2.1 model document available here: https://energy.gov/C2M2.', pageBreak: 'after' },
        
        // Section 2.2 Maturity Indicator Levels'
        { text: '2.2 Maturity Indicator Levels', style: 'header', marginBottom: largeSpacing },
        { text: 'The model defines four maturity indicator levels (MILs), MIL0 through MIL3, which apply independently to each domain in the mode. The MILs define a dual progression of maturity: an approach progression and a management progression.', marginBottom: normalSpacing },
        { text: 'Four aspects of the MILs are important for understanding and applying the model: ',
            ul: [
                'The maturity indicator levels apply independently to each domain. As a result, an organization using the model may be operating at different MIL ratings in different domains. For example, an organization could be operating at MIL1 in one domain, MIL2 in another domain, and MIL3 in a third domain',
                'The MILs—MIL0 through MIL3—are cumulative within each domain. To earn a MIL in a given domain, an organization must perform all of the practices in that level and its predecessor level. For example, an organization must perform all of the domain practices in MIL1 and MIL2 to achieve MIL2 in the domain. Similarly, the organization must perform all practices in MIL1, MIL2, and MIL3 to achieve MIL3.',
                'Establishing a target MIL for each domain is an effective strategy for using the model to guide cybersecurity program improvement. Organizations should become familiar with the practices in the model prior to determining target MILs. Then, they can focus gap analysis activities and improvement efforts on achieving those target levels.',
                'Practice performance and MIL achievement need to align with business objectives and the organization\'s cybersecurity program strategy. Striving to achieve the highest MIL in all domains may not be optimal. Companies should evaluate the costs of achieving a specifc MIL versus its potential benefts. However, the model was designed so that all companies, regardless of size, should be able to achieve MIL1 across all domains.',
            ],
            marginBottom: normalSpacing
        },
        { text: 'For a more in-depth discussion of the C2M2 domains, refer to the C2M2 V2.1 model document available here: https://energy.gov/C2M2.', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 2.3 Maturity Indicator Level Scoring
        { text: '2.3 Maturity Indicator Level Scoring', style: 'header', marginBottom: largeSpacing },
        { text: 'MIL achievement scores are derived from responses entered into the C2M2 Self-Evaluation Tool. Responses are chosen from a four-point scale: Fully Implemented (FI), Largely Implemented (LI), Partially Implemented (PI), and Not Implemented (NI). A MIL is achieved when all practices in that MIL and all preceding MILs receive responses of Fully Implemented or Largely Implemented. A MIL is not achieved if any practices in that MIL or a preceding MIL have received a response of Partially Implemented or Not Implemented. ', marginBottom: normalSpacing },
        { text: 'In other words, achieving a MIL in a domain requires the following: ',
            ol: [
                'Responses of Fully Implemented or Largely Implemented for all practices in that MIL',
                'Responses of Fully Implemented or Largely Implemented for all practices in the preceding MILs in that domain',
            ],
            marginBottom: normalSpacing
        },
        { text: 'For example, to achieve MIL1 in a domain with four MIL1 practices, all four MIL1 practices have responses of Fully Implemented or Largely Implemented. To achieve MIL2 in that same domain, all MIL1 and MIL2 practices must have responses of Fully Implemented or Largely Implemented.', marginBottom: normalSpacing },
        { text: 'Descriptions for self-evaluation response options are shown in the following table.', marginBottom: normalSpacing },
        { table: {
            headerRows: 1,
            widths: [ '*', 'auto' ],
            body: [
                [ { text: 'Response', bold: true, alignment: 'center' }, { text: 'Implementation Description', bold: true, alignment: 'center' }],
                [ { text: 'Fully Implemented (FI)', fillColor: '#005c99', color: 'white', alignment: 'center' }, 'Complete'],
                [ { text: 'Largely Implemented (LI)', fillColor: '#8ba6ca', alignment: 'center' }, 'Complete, but with a recognized opportunity for improvement'],
                [ { text: 'Partially Implemented (PI)', fillColor: '#fad980', alignment: 'center' }, 'Incomplete; there are multiple opportunities for improvement'],
                [ { text: 'Not Implemented (NI)', fillColor: '#e69f00', alignment: 'center' }, 'Absent; the practice is not performed by the organization'],
                ],
            },
            marginBottom: smallSpacing 
        },
        { text: 'Table 1: Description of Self-Evaluation Response Options', style: 'caption', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 3 Summary of Self-Evaluation Results
        { text: '3. Summary of Self-Evaluation Results', style: 'header', marginBottom: largeSpacing },
        
        // Section 3.1 MIL Achievement by Domain
        { text: '3.1 MIL Achievement by Domain', style: 'header', marginBottom: extraLargeSpacing },
        { text: 'Figure 2 shows the MIL achieved for each C2M2 domain.', marginBottom: normalSpacing },



        { text: 'Figure 2: MIL Achieved by Domain', style: 'caption', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 3.2 Practice Implementation by Domain
        { text: '3.2 Practice Implementation by Domain', style: 'header', marginBottom: largeSpacing },
        { text: 'Figure 3 shows summarized implementation level responses for each C2M2 practice, grouped by domain. The MIL achieved for each domain is listed at the bottom of the figure. A MIL is achieved when all practices in that MIL and all preceding MILs receive responses of Fully Implemented or Largely Implemented. A high-level understanding of the organization\'s self-evaluation results can be gained from this figure and may be useful when evaluation areas for future improvement.', marginBottom: normalSpacing },
        { text: 'The number in the center of each donut chart represents the cumulative number of practices in that MIL for that domain. Refer to Section 4.2 of the C2M2 V2.1 model document for a description of how MIL achievement is determined.', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        { text: 'COOL CHART HERE' },
        { text: 'Figure 3: Summary of Responses Input by MIL and Domain', style: 'caption', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 3.3 Implementation of Management Activities across Domains
        { text: '3.3 Implementation of Management Activities across Domains', style: 'header', marginBottom: largeSpacing },
        { text: 'The final objective of each C2M2 domain includes practices focused on cybersecurity management activities. These practices focus on the extent to which cybersecurity practices are institutionalized, or ingrained, in the organization\'s operations. The more deeply ingrained an activity, the more likely it is that the organization will continue to perform the activity over time; the activity will be retained under time of stress; and the outcomes of the activity will be consistent, repeatable, and of high quality. Table 2 provides a high-level overview of implementation of the Management Activities from two perspectives: 1) implementation of all Management Activities within each domain and 2) implementation of each Management Activities practice across the ten C2M2 domains.', marginBottom: normalSpacing },
        { text: '', marginBottom: smallSpacing },
        { table: 
          {
            widths: [170, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25 ],
            body: [
              [ '', assetSvg, threatSvg, riskSvg, accessSvg, situationSvg, responseSvg, thirdpartySvg, workforceSvg, architectureSvg, programSvg ],
              [ this.tableData.managementQuestions[0].questionText, this.tableTwoStructure[0], this.tableTwoStructure[1], this.tableTwoStructure[2], this.tableTwoStructure[3], this.tableTwoStructure[4], this.tableTwoStructure[5], this.tableTwoStructure[6], this.tableTwoStructure[7], this.tableTwoStructure[8], this.tableTwoStructure[9] ], 
              [ this.tableData.managementQuestions[1].questionText, this.tableTwoStructure[10], this.tableTwoStructure[11], this.tableTwoStructure[12], this.tableTwoStructure[13], this.tableTwoStructure[14], this.tableTwoStructure[15], this.tableTwoStructure[16], this.tableTwoStructure[17], this.tableTwoStructure[18], this.tableTwoStructure[19] ],
              [ this.tableData.managementQuestions[2].questionText, this.tableTwoStructure[20], this.tableTwoStructure[21], this.tableTwoStructure[22], this.tableTwoStructure[23], this.tableTwoStructure[24], this.tableTwoStructure[25], this.tableTwoStructure[26], this.tableTwoStructure[27], this.tableTwoStructure[28], this.tableTwoStructure[29] ],
              [ this.tableData.managementQuestions[3].questionText, this.tableTwoStructure[30], this.tableTwoStructure[31], this.tableTwoStructure[32], this.tableTwoStructure[33], this.tableTwoStructure[34], this.tableTwoStructure[35], this.tableTwoStructure[36], this.tableTwoStructure[37], this.tableTwoStructure[38], this.tableTwoStructure[39] ],
              [ this.tableData.managementQuestions[4].questionText, this.tableTwoStructure[40], this.tableTwoStructure[41], this.tableTwoStructure[42], this.tableTwoStructure[43], this.tableTwoStructure[44], this.tableTwoStructure[45], this.tableTwoStructure[46], this.tableTwoStructure[47], this.tableTwoStructure[48], this.tableTwoStructure[49] ],
              [ this.tableData.managementQuestions[5].questionText, this.tableTwoStructure[50], this.tableTwoStructure[51], this.tableTwoStructure[52], this.tableTwoStructure[53], this.tableTwoStructure[54], this.tableTwoStructure[55], this.tableTwoStructure[56], this.tableTwoStructure[57], this.tableTwoStructure[58], this.tableTwoStructure[59] ],
            ]
          }, 
          layout: {
            hLineColor: function (i, node) {
              return '#b3b3b3';
           },
           vLineColor: function (i, node) {
            return '#b3b3b3';
          },
          }, marginBottom: smallSpacing },
        { text: 'Table 2: Management Activities', style: 'caption', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 4 Detailed Self-Evaluation Results
        { text: '4. Detailed Self-Evaluation Results', style: 'header', marginBottom: largeSpacing },
        { text: 'This section provides the level of implementation (i.e., Fully Implemented, Largely Implemented, Partially Implemented, and Not Implemented) input to the self-evaluation tool for each C2M2 practice by domain, objective, and MIL. See Section 2.3 Maturity Indicator Level Scoring for a detailed explanation of the scoring process and Section 5 Using the Model for further detail regarding self-evaluation results.', marginBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 4.1 Domain: Asset. Change, and Configuration Management (ASSET)
        { text: '4.1 Domain: Asset, Change, and Configuration Management (ASSET)', style: 'header', marginBottom: largeSpacing },
        { text: 'Manage the organization\'s IT and OT assets, including both hardware and software, and information assets commensurate with the risk to critical infrastructure and organizational objectives', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Manage IT and OT Asset Inventory', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Manage Information Asset Inventory', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Manage IT and OT Asset Configurations', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Manage Changes to IT and OT Assets', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 5: Management Activities for the ASSET domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.2 Domain: Threat and Vulnerability Management (THREAT)
        { text: '4.2 Domain: Threat and Vulnerability Management (THREAT)', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain plans, procedures, and technologies to detect, identify, analyze, manage, and respond to cybersecurity threats and vulnerabilities, commensurate with the risk to the organization\'s infrastructure (such as critical, IT, and operational) and organizational objectives.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Reduce Cybersecurity Vulnerabilities', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Respond to Threats and Share Threat Information', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Management Activities for the THREAT domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.3 Domain: Risk Management (RISK)
        { text: '4.3 Domain: Risk Management (RISK) ', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish, operate, and maintain an enterprise cyber risk management program to identify, analyze, and response to cyber risk the organization is subject to, including its business units, subsidiaries, related interconnected infrastructure, and stakeholders.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Establish and Maintain Cyber Risk Management Strategy and Program', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Identify Cyber Risk', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Analyze Cyber Risk', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Respond to Cyber Risk', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 5: Management Activities for the RISK domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.4 Domain: Identity and Access Management (ACCESS) 
        { text: '4.4 Domain: Identity and Access Management (ACCESS)', style: 'header', marginBottom: largeSpacing },
        { text: 'Create and manage identities for the entities that may be granted logical or physical access to the organization\'s assets. Control access to the organization\'s assets, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Establish Identities and Manage Authentication', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Control Logical Access', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Control Physical Access', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Management Activities for the ACCESS domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.5 Domain: Situational Awareness (SITUATION)
        { text: '4.5 Domain: Situational Awareness (SITUATION)', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain activities and technologies to collect, monitor, analyze, alarm, report, and use operational, security, and threat information, including status and summary information from the other model domains, to establish situational awareness for both the organization\'s operational state and cybersecurity state.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Perform Logging', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Perform Monitoring', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Establish and Maintain Situation Awareness', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Management Activities for the SITUATION', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.6 Domain: Event and Incident Response, Continuity of Operations (RESPONSE)
        { text: '4.6 Domain: Event and Incident Response, Continuity of Operations (RESPONSE)', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain plans, procedures, and technologies to detect, analyze, mitigate, respond to, and recovery from cybersecurity events and incidents and to sustain operations during cybersecurity incidents, commensurate with the risk to critical and organizational objectives.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Detect Cybersecurity Events', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Analyze Cybersecurity Events and Declare Incidents', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Respond to Cybersecurity Incidents', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Address Cybersecurity in Continuity of Operations', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 5: Management Activities for the RESPONSE domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.7 Domain: Third-Party Risk Management (THIRD-PARTIES)
        { text: '4.7 Domain: Third-Party Risk Management (THIRD-PARTIES)', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain controls to manage the cyber risks arising from suppliers and other third parties, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Identify and Prioritize Third Parties', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Manage Third-Party Risk', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Management Activities for the THIRD-PARTIES domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.8 Domain: Workforce Management (WORKFORCE)
        { text: '4.8 Domain: Workforce Management (WORKFORCE)', style: 'header', marginBottom: largeSpacing },
        { text: '', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Implement Workforce Controls', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Increase Cybersecurity Awareness', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Assign Cybersecurity Responsibilities', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Develop Cybersecurity Workforce', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 5: Management Activities for the WORKFORCE domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.9 Domain: Cybersecurity Architecture (ARCHITECTURE)
        { text: '4.9 Domain: Cybersecurity Architecture (ARCHITECTURE)', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain the structure and behavior of the organization\'s cybersecurity architecture, including controls, processes, technologies, and other elements, commensurate with the risk to critical infrastructure and organizational objectives.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Establish and Maintain Cybersecurity Architecture Strategy and Program', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: plement Network Protections as an Element of the Cybersecurity Architecture', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Implement IT and OT Asset Security as an Element of the Cybersecurity Architecture', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 4: Implement Software Security as an Element of the Cybersecurity Architecture', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 5: Implement Data Security as an Element of the Cybersecurity Architecture', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 6: Management Activities for the ARCHITECTURE domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 4.10 Domain: Cybersecurity Program Management (PROGRAM)
        { text: '4.10 Domain: Cybersecurity Program Management (PROGRAM) ', style: 'header', marginBottom: largeSpacing },
        { text: 'Establish and maintain an enterprise cybersecurity program that provides governance, strategic planning, and sponsorship for the organization\'s cybersecurity activities in a manner that aligns cybersecurity objectives with both the organization\'s strategic objectives and the risk to critical infrastructure.', marginBottom: normalSpacing },
        { text: 'CHART AND HEAT MAP STUFF HERE', pageBreak: 'after' },
        { text: 'Objective 1: Establish Cybersecurity Program Strategy', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 2: Establish and Maintain Cybersecurity Program', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        { text: 'Objective 3: Management Activities for the PROGRAM domain', style: 'subHeader', marginBottom: smallSpacing },
        { text: 'TABLE HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 5: Using the Self-Evaluation Results
        { text: '5. Using the Self-Evaluation Results', style: 'header', marginBottom: largeSpacing },
        { text: 'The C2M2 is meant to be used by an organization to evaluate its cybersecurity capabilities consistently, to communicate its capability levels in meaningful terms, and to inform the prioritization of its cybersecurity investments. Figure 4 summarizes a potential approach for using the model. An organization performs a self-evaluation against the model, uses that self-evaluation to identify gaps in capability, prioritizes those gaps and develops plans to address them, and finally implements plans to address the gaps. As plans are implemented, business objectives change, and the risk environment evolves, the process is repeated. This section offers a brief overview of how to use the self-evaluation results in this approach. For a more detailed review of these steps and additional guidance, see the "Using the Model" section of the C2M2 V2.1 model document available here: https://energy.gov/C2M2.', marginBottom: smallSpacing },
        { svg: '<svg width="335" viewBox="-700 -230 895 444" fill="#fff" font-family="Calibri" font-size="36" text-anchor="middle" overflow="visible"><title id="assessmentApproachTitle">Figure 4: Potential Approach for Using the Model</title><desc id="assessmentApproachDesc">Figure 4: Potential Approach for Using the Model. A flow chart graphic showing 4 steps in a circular formation with arrows demonstrating a clockwise movement. The steps are Perform Evaluation, Analyze Identified Gaps, Prioritize and Plan, and Implement Plans.</desc><g id="aa-use" transform="translate(350) rotate(45)"><circle r="150" fill="#015289"></circle><path fill="#015289" d="M0 300l50-40H30v-50h-60v50h-20z"></path></g><use href="#aa-use" transform="rotate(90)"></use><use href="#aa-use" transform="rotate(180)"></use><use href="#aa-use" transform="rotate(270)"></use><text x="-350"><tspan dy="-.8em">Implement</tspan><tspan x="-350" dy="1.2em">Plans</tspan></text><text y="-350"><tspan dy="-.8em">Perform a</tspan><tspan x="0" dy="1.2em">Self-</tspan><tspan x="0" dy="1.2em">Evaluation</tspan></text><text x="350"><tspan dy="-.8em">Analyze</tspan><tspan x="350" dy="1.2em">Identified</tspan><tspan x="350" dy="1.2em">Gaps</tspan></text><text y="350"><tspan x="0" dy="-.6em">Prioritize</tspan><tspan x="0" dy="1.2em">and Plan</tspan></text></svg>', marginBottom: -15 },
        { text: 'Figure 4: Proposed Approach for Using the Model', style: 'caption', marginBottom: extraLargeSpacing },
        { text: 'This report summarizes the results of the organization\'s self-evaluation conducted in Step 1, Perform a Self-Evaluation', marginBottom: normalSpacing },
        { text: 'It provides a point-in-tine view of the cybersecurity posture of the in-scope function. Self-evaluation workshop participants should review this report and collectively address, any discrepancies or questions before the next step.', marginBottom: normalSpacing },
        { text: 'In Step 2, Analyze Identified Gaps, the organization identifies gaps in the performance of model practices by examining the self-evaluation results against its target profile - the desired profile that represents the organization\'s target MIL rating for each domain in the model. Organizations using the model for the first time may identify the target profile after performing a self-evaluation, while others often identify a target profile before conducting a self-evaluation. For more information on setting targets, see Appendix D, "Setting Targets" in the C2M2 Self-Evaluation Guide available here: https://energy.gov/C2M2.', marginBottom: normalSpacing },
        { text: 'In Step 3, Prioritize and Plan, the organization uses the gap analysis to prioritize the actions needed to fully implement the practices in the target profile. A cost-benefit analysis may help to inform the prioritization of actions needed. The organization should then develop a plan to address the selected gaps and assign ownership of the plan to an individual with sufficient authority to oversee implementation.', marginBottom: normalSpacing },
        { text: 'Regular reviews by organizational leadership should be conducted to evaluate status, clear obstacles, and identify any necessary course corrections as implementation progresses.', marginBottom: normalSpacing },
        { text: 'In Step 4, Implement Plans and Periodically Reevaluate, plans developed in the previous step should be implemented to address the identified gaps. Subsequent model self-evaluations are particularly useful in tracking implementation and should be conducted periodically to ensure that desired progress is achieved. Reevaluations should also be considered in response to major changes in business, technology, market, or threat environments to ensure that the current profile matches the organization\'s desired state.', marinBottom: normalSpacing },
        { text: '', pageBreak: 'after' },
        
        // Section 6 Self-Evaluation Notes
        { text: '6. Self-Evaluation Notes', style: 'header', marginBottom: largeSpacing },
        { text: 'This section lists all practices for which notes were captured during the self-evaluation, regardless of implementation status. Reviewing the notes may provide the rationale for the selection of an implementation response during the completion of the self-evaluation. The tables in this section are ordered by model practice identifier.', marginBottom: largeSpacing },
        { text: 'TABLE WITH COMMENTS OR NO COMMENT BOXES HERE' },
        { text: '', pageBreak: 'after' },
        
        // Section 7 List of Partially Implemented and Not Implemented Practices
        { text: '7. List of Partially Implemented and Not Implemented Practices', style: 'header', marginBottom: largeSpacing },
        { text: 'Practices that received a response of Partially Implemented or Not Implemented are consolidated in this section and shown with any notes captured during the self-evaluation. If an organization is targeting a MIL in a specific domain, these tables will highlight the practices the organization must prioritize to achieve the target MIL.', marginBottom: normalSpacing },
        { text: 'The tables in this section are ordered first by MIL, then further ordered by the implementation response for practices at that MIL, with Partially Implemented practices followed by Not Implemented practices. This highlights the practices that may be the focus of improvement efforts to reach a MIL target in each domain.', marginBottom: largeSpacing },
        { text: 'TABLE WITH PARTIALLY IMPLEMENTED QUESTIONS', marginBottom: normalSpacing },
        { text: '', pageBreakL: 'after' }
    ],
	
	styles: {
      header: { fontSize: 28, bold: true, color: '#0A5278' },
      subHeader: { fontSize: 16, color: '#0A5278' },
      caption: { fontSize: 12, color: '#0A5278', alignment: 'center' },
      defaultStyle: { fontSize: 12 }
    }
  };

    pdfMake.createPdf(this.pdfDocument).open();
  }
}