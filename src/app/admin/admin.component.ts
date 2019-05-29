import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';


// import { StoreData } from './../storeData.model';
import { PagerService } from './../common/pager-service.service';


@Injectable()
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{


  @Input() ViewFirstName: string;
  @Input() ViewLastName: string;
  @Input() ViewEmail: string;

  // ngOnChanges(form) {

  //     this.pagedItems.push(form.value);
  // }

  // storePerson: StoreData[] = [];
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private http: Http, private pagerService: PagerService) { }

  ngOnInit() {
    // get dummy data
    this.http.get(' http://www.mocky.io/v2/5ce78f1e330000b2ec731af1')
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
    form.value.status = "Inactive";
    this.pagedItems.push(form.value);
    // console.log(form.value.status);
    // console.log(this.pagedItems.length);
  }

  onViewDetails(i) {

    let view = this.pagedItems;

    this.ViewFirstName = view[i].firstname;
    this.ViewLastName = view[i].lastname;
    this.ViewEmail = view[i].email;

      // console.log(this.ViewFirstName);
      // console.log(this.ViewLastName);
      // console.log(this.ViewEmail);

  }

}
