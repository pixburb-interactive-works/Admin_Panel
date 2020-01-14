import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  modalBaseURL = 'organization';

  constructor(private httpClient: HttpClient) { }

  createOrganization(organizationName: string, createdBy: string) {
    console.log(environment.baseURL);
    return this.httpClient.post(environment.baseURL + this.modalBaseURL + '/create', {organizationName, createdBy});
  }
}
