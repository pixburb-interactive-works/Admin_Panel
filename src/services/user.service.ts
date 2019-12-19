import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {last} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ModelBaseURL = '/users';
  // private ModelBaseURL = '';

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    return this.httpClient.post('http://localhost:8080' + this.ModelBaseURL + '/login', {email: username, password});
  }

  public addUser(firstName: string, lastName: string, phone: string, email: string, password: string) {
    return this.httpClient.post('http://localhost:8080' + this.ModelBaseURL + '/create', { firstName, lastName, phone, email, password});
  }

  public otpVerification(email: string, otp: string) {
    return this.httpClient.post( 'http://localhost:8080' + this.ModelBaseURL + '/verify', {email, otp});
  }
}
