import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

 storePerson = new Array();

  constructor() { }

  ngOnInit() {
  }

  onStorePerson(form: NgForm) {

    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const email = form.value.email;
    this.storePerson = [firstname, lastname, email];
    const arr: Array<String> = this.storePerson;
    console.log(arr);
  }

  // onStorePerson() {
  //   this.storePerson = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  //   console.log(this.storePerson);
  // }
  // onAddPerson() {
  //   console.log(this.storePerson);
  // }

}
