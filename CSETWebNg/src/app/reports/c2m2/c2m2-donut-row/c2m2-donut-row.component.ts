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
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2m2-donut-row',
  templateUrl: './c2m2-donut-row.component.html',
  styleUrls: ['./c2m2-donut-row.component.scss']
})
export class C2m2DonutRowComponent implements OnInit {



  @Input() donutRowData: any;
  //totalQuestionsCount: number;

  data: any[];
  //view: any[] = [300, 300];

  // colorScheme = {
  //   //domain: ['#005c99', '#8ba6ca', '#fad980', '#e69f00', '#cccccc']
  //   domain: ['#265B94', '#90A5C7', '#F5DA8C', '#DCA237', '#AAAAAA']
  // };

  constructor() {
  }

  ngOnInit(): void {
    // for (let objective of this.donutRowData){
    //   this.data.push(objective);
    // }
    
    // console.log('donutRowData (after parse)')
    // console.log(this.data)
    //this.totalQuestionsCount = this.data.map(x => x.value).reduce((a, b) => a + b);
  }

  // labelFormatting(name) {
  //   return this.data.find(x => x.data.name == name)?.value;
  // }
}
