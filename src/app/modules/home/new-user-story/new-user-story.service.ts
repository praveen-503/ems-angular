import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewUserStoryService {

  readonly rootUrl='';

  constructor(private http:HttpClient ) { }

  postData(formData){
    return this.http.post(this.rootUrl+'/paymentDetail',formData)
  }

}
