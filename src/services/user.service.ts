import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ModelBaseURL = '/users';
  // private ModelBaseURL = '';

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    return this.httpClient.post(environment.baseURL + this.ModelBaseURL + '/login', {email: username, password});
  }

  public addUser(firstName: string, lastName: string, phone: string, email: string, password: string) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(environment.baseURL + this.ModelBaseURL + '/createAdmin', { firstName, lastName, phone, email, password});
  }

  public otpVerification(email: string, otp: string) {
    return this.httpClient.post( environment.baseURL + this.ModelBaseURL + '/verify', {email, otp});
  }
}
