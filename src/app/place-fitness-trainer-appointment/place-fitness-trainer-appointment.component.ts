import { Component, OnInit} from '@angular/core';
import {  FormGroup } from '@angular/forms';


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public age: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'

})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

   // tslint:disable-next-line: max-line-length
   userModel = new Fitness(500, 50, 'Gtree', 'Kolkata', 'WB', 'India', 7565565, 888888888, 'abd@yahoo.com', 'Abg', 'def', 56, 'female', 'yes', '555');


  fitnessForm: FormGroup;

  constructor() { }


  ngOnInit() {

  }

  onSubmit() {
    console.log('Form Submitted');
  }

}
