import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  loginOnClick() {
    this.userService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (data: any) => {
        console.log(data[0]);
        if (data.status === 200) {
          this.router.navigate(['/home']).then();
        } else {
          alert(data.displayMessage);
        }
      }
    );
  }

  restOnClick() {
  }
}
