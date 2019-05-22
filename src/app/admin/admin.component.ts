import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


import { StoreData } from './../storeData.model';
import { PagerService } from './../common/pager-service.service';

@Injectable()
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  storePerson: StoreData[] = [];
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, private pagerService: PagerService) { }

  ngOnInit() {
    // get dummy data
    this.http.get('http://www.mocky.io/v2/5ce5408f2e00001272f83c2a')
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

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onStorePerson(form) {
    this.storePerson.push(form.value);
  }
}
