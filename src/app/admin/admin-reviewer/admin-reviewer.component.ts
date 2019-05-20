import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/storeData.model';

@Component({
  selector: 'app-admin-reviewer',
  templateUrl: './admin-reviewer.component.html',
  styleUrls: ['./admin-reviewer.component.css']
})
export class AdminReviewerComponent implements OnInit {

  storePerson: StoreData[] = [];

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form) {
    this.storePerson.push(form.value);
  }

}
