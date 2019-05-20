import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/storeData.model';

@Component({
  selector: 'app-admin-hr',
  templateUrl: './admin-hr.component.html',
  styleUrls: ['./admin-hr.component.css']
})
export class AdminHrComponent implements OnInit {

  storePerson: StoreData[] = [];

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form) {
    this.storePerson.push(form.value);
  }

}
