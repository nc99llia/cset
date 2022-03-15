////////////////////////////////
//
//   Copyright 2022 Battelle Energy Alliance, LLC
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
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AssessmentService } from '../../../../services/assessment.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CyoteService } from '../../../../services/cyote.service';
import { CyoteObservable } from '../../../../models/cyote.model';

@Component({
  selector: 'app-cyote-deep-dive',
  templateUrl: './cyote-deep-dive.component.html',
  styleUrls: ['../cyote-questions.component.scss']
})
export class CyoteDeepDiveComponent implements OnInit {

  @Input() anomaly: CyoteObservable;


  constructor(
    private route: ActivatedRoute,
    public assessSvc: AssessmentService,
    public cyoteSvc: CyoteService,
  ) { }

  ngOnInit(): void {

    // TEMP TEMPL
    this.anomaly = this.cyoteSvc.anomalies[0];

  }

  
}
