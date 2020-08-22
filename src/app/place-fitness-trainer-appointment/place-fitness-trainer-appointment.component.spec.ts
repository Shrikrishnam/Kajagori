import {   async,
  ComponentFixture,
  TestBed,
  inject } from '@angular/core/testing';

import { PlaceFitnessTrainerAppointmentComponent, Fitness } from './place-fitness-trainer-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from '../_services/user.service';
import {
  HttpModule,
} from '@angular/http';
describe('PlaceFitnessTrainerAppointmentComponent', () => {
  let component: PlaceFitnessTrainerAppointmentComponent;
  let fixture: ComponentFixture<PlaceFitnessTrainerAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceFitnessTrainerAppointmentComponent ],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        RouterTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFitnessTrainerAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe('boundary', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('form invalid when empty toBeFalsy()', () => {
      expect(component.fitnessForm.valid).toBeFalsy();
    });

    it('firstname field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const recipientFname = component.fitnessForm.controls.firstname;
      expect(recipientFname.valid).toBeFalsy();

      // recipientFname field is required
      errors = recipientFname.errors || {};

      // Set recipientFname to something
      recipientFname.setValue('test');
      errors = recipientFname.errors || {};

      // Set recipientFname to something correct
      recipientFname.setValue('testFirstName');
      errors = recipientFname.errors || {};
    });

    it('lastname field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const recipientLname = component.fitnessForm.controls.lastname;
      expect(recipientLname.valid).toBeFalsy();

      // recipientLname field is required
      errors = recipientLname.errors || {};

      // Set recipientLname to something
      recipientLname.setValue('test');
      errors = recipientLname.errors || {};
      // Set recipientLname to something correct
      recipientLname.setValue('testFirstName');
      errors = recipientLname.errors || {};
    });

    it('age field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const age = component.fitnessForm.controls.age;
      expect(age.valid).toBeFalsy();

      // age field is required
      errors = age.errors || {};

      // Set age to something
      age.setValue(0);
      errors = age.errors || {};
      // Set age to something correct
      age.setValue(24);
      errors = age.errors || {};
    });

    it('phonenumber field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const phonenumber = component.fitnessForm.controls.phonenumber;
      expect(phonenumber.valid).toBeFalsy();

      // phonenumber field is required
      errors = phonenumber.errors || {};

      // Set phonenumber to something
      phonenumber.setValue(0);
      errors = phonenumber.errors || {};
      // Set phonenumber to something correct
      phonenumber.setValue(9988776655);
      errors = phonenumber.errors || {};
    });

    it('email field validity .toBeFalsy() .toBeTruthy()', () => {
      let errors = {};
      const email = component.fitnessForm.controls.email;
      expect(email.valid).toBeFalsy();

      // Email field is required
      errors = email.errors || {};
      // Set email to something
      email.setValue('test');
      errors = email.errors || {};

      // Set email to something correct
      email.setValue('test@test.com');
      errors = email.errors || {};
    });

    it('streetaddress field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const streetaddress = component.fitnessForm.controls.streetaddress;
      expect(streetaddress.valid).toBeFalsy();

      // streetaddress field is required
      errors = streetaddress.errors || {};

      // Set streetaddress to something
      streetaddress.setValue('test');
      errors = streetaddress.errors || {};
      // Set streetaddress to something correct
      streetaddress.setValue('#123 test address');
      errors = streetaddress.errors || {};
    });

    it('city field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const city = component.fitnessForm.controls.city;
      expect(city.valid).toBeFalsy();

      // city field is required
      errors = city.errors || {};

      // Set city to something
      city.setValue('te');
      errors = city.errors || {};

      // Set city to something correct
      city.setValue('test');
      errors = city.errors || {};
    });

    it('state field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const state = component.fitnessForm.controls.state;
      expect(state.valid).toBeFalsy();

      // state field is required
      errors = state.errors || {};
      // Set state to something
      state.setValue('te');
      errors = state.errors || {};

      // Set state to something correct
      state.setValue('test');
      errors = state.errors || {};
    });

    it('country field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const country = component.fitnessForm.controls.country;
      expect(country.valid).toBeFalsy();

      // country field is required
      errors = country.errors || {};

      // Set country to something
      country.setValue('te');
      errors = country.errors || {};
      // Set country to something correct
      country.setValue('test');
      errors = country.errors || {};
    });

    it('pincode field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const pincode = component.fitnessForm.controls.pincode;
      expect(pincode.valid).toBeFalsy();

      // pincode field is required
      errors = pincode.errors || {};

      // Set pincode to something
      pincode.setValue(0);
      errors = pincode.errors || {};
      // Set pincode to something correct
      pincode.setValue(123456);
      errors = pincode.errors || {};
    });
    it('inr field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const inr = component.fitnessForm.controls.inr;
      expect(inr.valid).toBeFalsy();

      // inr field is required
      errors = inr.errors || {};

      // Set inr to something
      inr.setValue(0);
      errors = inr.errors || {};

      // Set inr to something correct
      inr.setValue(1000);
      errors = inr.errors || {};
    });

    it('paisa field validation toBeFalsy() toBeTruthy() ', () => {
      let errors = {};
      const paisa = component.fitnessForm.controls.paisa;
      expect(paisa.valid).toBeFalsy();

      // paisa field is required
      errors = paisa.errors || {};

      // Set paisa to something
      paisa.setValue(0);
      errors = paisa.errors || {};
      // Set paisa to something correct
      paisa.setValue(10);
      errors = paisa.errors || {};
    });

  });


  describe('business', () => {

    // tslint:disable-next-line:max-line-length
    it('should be Place gift card order', inject([HttpTestingController, UserService], (httpMock: HttpTestingController, dataService: UserService) => {

      const data = {
        firstname: 'testFirstName',
        lastname: 'testLastName',
        age: 24,
        phonenumber: 9988776655,
        email: 'test@test.com',
        streetaddress: '#123 test address',
        city: 'test',
        state: 'test',
        country: 'test',
        pincode: '123456',
        trainerpreference: 'male',
        physiotherapist: 'yes',
        packages: '500',
        inr: 10000,
        paisa: 10
      };
      // tslint:disable-next-line:no-shadowed-variable
      dataService.postfitnessdata(data).subscribe(data => {
        expect(data).toEqual(data);
      });
    }));

  });

});
