////////////////////////////////
//
//   Copyright 2021 Battelle Energy Alliance, LLC
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
import { Component, OnInit, AfterViewChecked, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ReportAnalysisService } from '../../../services/report-analysis.service';
import { ReportService } from '../../../services/report.service';
import { Title } from '@angular/platform-browser';
import { CmmcStyleService } from '../../../services/cmmc-style.service';
import { BehaviorSubject } from 'rxjs';
import Chart from 'chart.js/auto';
import { ChartService } from '../../../services/chart.service';
@Component({
  selector: 'executive',
  templateUrl: './executive-cmmc.component.html',
  styleUrls: ['../../reports.scss'],
  // providers:  [ CmmcStyleService ]
})
export class ExecutiveCMMCComponent implements OnInit, AfterViewChecked {
  response: any;

  chartPercentCompliance: Chart;
  chartStandardsSummary: Chart;
  canvasStandardResultsByCategory: Chart;
  responseResultsByCategory: any;


  // Charts for Components
  componentCount = 0;
  chartComponentSummary: Chart;
  chartComponentsTypes: Chart;
  warningCount = 0;
  chart1: Chart;

  numberOfStandards = -1;

  pageInitialized = false;


  columnWidthPx: number;
  gridColumnCount = 10
  gridColumns = new Array(this.gridColumnCount);
  columnWidthEmitter: BehaviorSubject<number>;
  @ViewChild("gridChartDataDiv") gridChartData: ElementRef;
  @ViewChild("gridTiles") gridChartTiles: Array<any>;

  constructor(
    public reportSvc: ReportService,
    private analysisSvc: ReportAnalysisService,
    private chartSvc: ChartService,
    private titleService: Title,
    public cmmcStyleSvc: CmmcStyleService
  ) {
    this.columnWidthEmitter = new BehaviorSubject<number>(25)
  }

  ngOnInit() {
    this.cmmcStyleSvc.getData();

    // populate pie charts.  If getData() returned an observable 
    // we wouldn't need a timeout...
    setTimeout(() => {
      var cmmcModel = this.cmmcStyleSvc.cmmcModel;
      cmmcModel.statsByLevel.forEach(level => {
        if (+level.modelLevel <= cmmcModel.targetLevel) {
          this.buildNewPie(level);
        }
      });
    }, 1000);

    this.titleService.setTitle("Executive Summary - CSET");

    this.reportSvc.getReport('executivecmmc').subscribe((r: any) => {
      this.response = r;
    },
      error => console.log('Executive report load Error: ' + (<Error>error).message)
    );
    this.columnWidthEmitter.subscribe(item => {
      $(".gridCell").css("width", `${item}px`)
    });
  }

  ngAfterViewInit() {
    this.getcolumnWidth();
  }

  ngAfterViewChecked() {
    this.getcolumnWidth();
  }

  //horizontalDomainBarChat
  getcolumnWidth() {
    this.columnWidthPx = this.gridChartData?.nativeElement.clientWidth / this.gridColumns.length;
    this.columnWidthEmitter.next(this.columnWidthPx)
  }

  getBarWidth(data) {
    return {
      'flex-grow': data.questionAnswered / data.questionCount,
      'background': this.cmmcStyleSvc.getGradient("blue")
    }
  }

  /**
   * 
   */
  buildNewPie(level: any) {
    // build the data object for Chart
    var x: any = {};
    x.label = '';
    x.labels = ['Compliant', 'Noncompliant'];
    x.data = [100 * (level.questionAnswered / level.questionCount), 100 * (level.questionUnAnswered / level.questionCount)];
    x.colors = [this.chartSvc.segmentColor('Y'), this.chartSvc.segmentColor('U')];

    var canvasId = 'level' + level.modelLevel;

    setTimeout(() => {
      level.chart = this.chartSvc.buildDoughnutChart(canvasId, x);
    }, 10);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getcolumnWidth();
  }

}
