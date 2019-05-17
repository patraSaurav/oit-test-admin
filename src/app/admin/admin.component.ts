import { StoreData } from './../storeData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  storePerson: StoreData[] = [];

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form) {
    this.storePerson.push(form.value);
  }
}
