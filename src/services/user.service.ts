import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private ModelBaseURL = '/users';
  private ModelBaseURL = '';

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string) {
    return this.httpClient.post('http://localhost:8080' + this.ModelBaseURL + '/login', {email: username, password});
  }
}
