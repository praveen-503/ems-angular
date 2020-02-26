import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from '../../../environments/environment'
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BillingManagerService {
  formData: FormGroup;
  readonly rootURL = environment.apiUri;
  list: Project[];
  clientlist: Client[];
  constructor(private http: HttpClient) { }
  // getProject() {
  //   this.http.get(this.rootURL + '').toPromise()
  //     .then(data => (this.list = data as Project[]));
  // }
  getClient() {
    return this.http.get(this.rootURL + '/client').subscribe(res => {
      this.clientlist = res as Client[];
    });
  }
  postClient(FormData: Client) {
    return this.http.post(this.rootURL + '/client', FormData, { observe: 'response' });
  }
  postProject(Data: Project) {
    return this.http.post(this.rootURL + '/project', Data, { observe: 'response' });
  }
}
