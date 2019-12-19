import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  createAdminUser: FormGroup;
  OTPVerification: FormGroup;
  errorMessage = '';
  errorOTPMessage = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.createAdminUser = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      password: new FormControl(null, Validators.required),
      retypePassword: new FormControl(null, Validators.required)
    });
    this.OTPVerification = this.formBuilder.group({
      otpField: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    // $('button[aria-controls="collapseTwo"]').attr('disabled', false).trigger('click').attr('disabled', true);
  }

  createAdmin() {
    // tslint:disable-next-line:triple-equals
    if (this.createAdminUser.value.password == this.createAdminUser.value.retypePassword) {
      this.errorMessage = '';
      this.userService.addUser(
        this.createAdminUser.value.firstName,
        this.createAdminUser.value.lastName,
        this.createAdminUser.value.phone,
        this.createAdminUser.value.email,
        this.createAdminUser.value.password
      ).subscribe(
        (data: any) => {
          if (data.status === 200) {
            $('button[aria-controls="collapseTwo"]').attr('disabled', false).trigger('click').attr('disabled', true);
          } else {
            this.errorMessage = data.displayMessage;
          }
        });
    } else {
      this.createAdminUser.controls.retypePassword.setErrors({incorrect: true});
      this.errorMessage = 'Password doesn\'t match';
    }
  }

  OTPVerify() {
    this.userService.otpVerification(
      this.createAdminUser.value.email,
      this.OTPVerification.value.otpField
    ).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status === 200) {
          $('button[aria-controls="collapseThree"]').attr('disabled', false).trigger('click').attr('disabled', true);
        } else {
          this.errorOTPMessage = data.displayMessage;
        }
      }
    );
  }
}
