import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { PagerQuestionService } from 'src/app/common/pager-question.service';

@Injectable()
@Component({
  selector: 'app-user-exam',
  templateUrl: './user-exam.component.html',
  styleUrls: ['./user-exam.component.css']
})
export class UserExamComponent implements OnInit {

  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, private pagerQuestionService: PagerQuestionService) { }

  ngOnInit() {
    this.startTimer();

      // get dummy data
      this.http.get('http://www.mocky.io/v2/5cf4eb182f000099264f054f')
      .pipe(
        map((response: Response) => response.json())
      )
      .subscribe(data => {
          // set items to json response
          this.allItems = data;

          // initialize to page 1
          this.setPage(1);
      });
  }

  minute: number = 25;
  second: number = 60;
  interval;

startTimer() {
    this.interval = setInterval(() => {
      if( (this.minute * this.second) > 0) {
        if(this.second < 1) {
          this.minute--;
          if(this.minute < 1) {
            this.second = 0;
            this.minute = 0;
          }
        }
        this.second--;
      // } else {
      //   this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerQuestionService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

}
