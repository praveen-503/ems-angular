import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/shared/models/client.model';
import {environment} from '../../../environments/environment'
  
@Injectable({
  providedIn: 'root'
})
export class BillingManagerService {
//FormData:Project;/client
readonly rootURL=  environment.apiUri;
list: Project[];
clientlist: Client[];
constructor(private http: HttpClient ) {}

getProject() {
  this.http.get(this.rootURL + '').toPromise()
   .then(data => (this.list = data as Project[]));
}
getClient(){
  this.http.get(this.rootURL+'').toPromise()
  .then(data =>(this.clientlist = data as Client[]));
}
postClient(FormData){
 
  console.log(FormData);

 return this.http.post('http://localhost:62224/api'+'/client',FormData,{observe:'response'});

}

postProject(Data){
return this.http.post(this.rootURL+'/project',Data)
}
  
}
