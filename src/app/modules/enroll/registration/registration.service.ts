import { Injectable } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
readonly apiUri = environment.apiUri ;

  constructor(private http:HttpClient) { }

  postEmployee(employee:Employee){
    return this.http.post<any>(this.apiUri+'/employee',employee,{observe:'response'});
  }
}
