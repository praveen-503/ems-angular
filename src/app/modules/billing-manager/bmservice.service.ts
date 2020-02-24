import { Injectable } from '@angular/core';
//import { Project } from 'src/app/shared/models/project.model';
import {HttpClient} from '@angular/common/http';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class BmserviceService {

   
//FormData:Project;
//readonly rootURL=  "https://localhost:44392/api/";
//list: Project[];
constructor(private http: HttpClient ) {}

// get() {
//   this.http
//     .get(this.rootURL + "")
//     .toPromise()
//     .then(data => (this.list = data as Project[]));
// }
  
}
