import { Component, OnInit } from '@angular/core';
import { StoreData } from '../storeData.model';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  
  storePerson: StoreData[] = [];

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form) {
    this.storePerson.push(form.value);
  }


}
