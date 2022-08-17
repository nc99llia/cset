import { Component, Input, OnInit } from '@angular/core';
import { CrrReportModel } from '../../../../models/reports.model';
import { CrrService } from '../../../../services/crr.service';

@Component({
  selector: 'app-crr-mil1-performance-summary',
  templateUrl: './crr-mil1-performance-summary.component.html',
  styleUrls: ['./../crr-report.component.scss']
})
export class CrrMil1PerformanceSummaryComponent implements OnInit {

  @Input() model: CrrReportModel;
  mil1FullAnswerDistribChartHtml: string = '';
  legend: string = '';

  constructor(private crrSvc: CrrService) { }

  ngOnInit(): void {
    this.crrSvc.getMil1FullAnswerDistribHtml().subscribe((resp: any) => {
      this.mil1FullAnswerDistribChartHtml = resp.html;
    })

    this.crrSvc.getMil1PerformanceSummaryLegend().subscribe((resp: any) => {
      this.legend = resp.html;
    })
  }

}
