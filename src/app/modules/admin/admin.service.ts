import { Injectable } from '@angular/core';
import { BillingManager } from './add-billing-manager/billing-manager.model';
import { Reviewer } from './add-reviewer/reviewer.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
//FormData:Project;/client
readonly rootURL=  environment.apiUri;
billingManagerList: BillingManager[];
reviewerList: Reviewer[];
constructor(private http: HttpClient ) {}

getBillingManager() {
  this.http.get(this.rootURL + '').toPromise()
   .then(data => (this.billingManagerList = data as BillingManager[]));
}
getReviewer(){
  this.http.get(this.rootURL+'').toPromise()
  .then(data =>(this.reviewerList = data as Reviewer[]));
}
postBillingManager(FormData){
 return this.http.post(this.rootURL+'/billing-manager',FormData,{observe:'response'});
}

postReviewer(Data){
return this.http.post(this.rootURL+'/reviewer',Data)
}
  
}
