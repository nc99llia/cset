////////////////////////////////
//
//   Copyright 2020 Battelle Energy Alliance, LLC
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
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Domain } from '../../../models/questions.model';
import { QuestionResponse } from '../../../models/questions.model';
import { AssessmentService } from '../../../services/assessment.service';
import { MaturityService } from '../../../services/maturity.service';
import { NavigationService } from '../../../services/navigation.service';
import { QuestionsService } from '../../../services/questions.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { QuestionFiltersComponent } from '../../../dialogs/question-filters/question-filters.component';

@Component({
  selector: 'app-diagram-questions',
  templateUrl: './diagram-questions.component.html'
})
export class DiagramQuestionsComponent implements OnInit, AfterViewInit {

  domains: Domain[] = null;
  
  loaded = false;

  filterDialogRef: MatDialogRef<QuestionFiltersComponent>;

  constructor(
    public assessSvc: AssessmentService,
    public maturitySvc: MaturityService,
    public questionsSvc: QuestionsService,
    public navSvc: NavigationService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadQuestions();
    this.assessSvc.currentTab = 'questions';
  }

  /**
   *
   */
  ngAfterViewInit() {
    // if (this.domains != null && this.domains.length <= 0) {
    //   this.loadQuestions();
    // }

    // this.assessSvc.currentTab = 'questions';
    // this.loaded = true;
  }


  /**
   * Retrieves the complete list of questions
   */
  loadQuestions() {
    const magic = this.navSvc.getMagic();
    this.domains = null;
    this.questionsSvc.getComponentQuestionsList().subscribe(
      (response: QuestionResponse) => {
        this.questionsSvc.componentQuestions = response;
        this.domains = response.Domains;
        this.loaded = true;

        this.refreshQuestionVisibility(magic);
      },
      error => {
        console.log(
          'Error getting questions: ' +
          (<Error>error).name +
          (<Error>error).message
        );
        console.log('Error getting questions: ' + (<Error>error).stack);
      }
    );
  }


  /**
   * Controls the mass expansion/collapse of all subcategories on the screen.
   * @param mode
   */
  expandAll(mode: boolean) {
    this.domains.forEach((d: Domain) => {
      d.Categories.forEach(group => {
        group.SubCategories.forEach(subcategory => {
          subcategory.Expanded = mode;
        });
      });
    });
  }

    /**
   * 
   */
  showFilterDialog() {
    this.filterDialogRef = this.dialog.open(QuestionFiltersComponent);
    this.filterDialogRef.componentInstance.filterChanged.asObservable().subscribe(() => {
      this.refreshQuestionVisibility();
    });
    this.filterDialogRef
      .afterClosed()
      .subscribe(() => {
        this.refreshQuestionVisibility();
      });
  }

   /**
   * Re-evaluates the visibility of all questions/subcategories/categories
   * based on the current filter settings.
   * Also re-draws the sidenav category tree, skipping categories
   * that are not currently visible.
   */
  refreshQuestionVisibility(magic?: string) {
    if (!magic) {
      magic = this.navSvc.getMagic();
    }

    this.questionsSvc.evaluateFilters(this.domains);
    if (!!this.domains) {
      // this.populateTree(magic);
    }
  }
}
