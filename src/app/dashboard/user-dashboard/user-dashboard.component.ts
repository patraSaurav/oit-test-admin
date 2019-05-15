import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

 import { StoreData } from '../../storeData.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

 storePerson: StoreData[] = [];

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form: NgForm) {

    this.storePerson.push(form.value)
    console.log(this.storePerson);
  }



}
