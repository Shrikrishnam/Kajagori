import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  userData: any = [
    {firstname: 'John', lastname: 'Doe', age: 32, email: 'jdoe@gmail.com'},
    {firstname: 'Stuart', lastname: 'Williams', age: 28, email: 'swill@gmail.com'},
    {firstname: 'Bob', lastname: 'Weasley', age: 27, email: 'bobweasley@gmail.com'},
  ];

  getCurrentUser(user): void {
    console.log(user);
  }

  deleteUserData(user) {

    }




  constructor() {
    console.log(this.userData);
  }




  ngOnInit() {

  }

  getfitness() {

  }
}
