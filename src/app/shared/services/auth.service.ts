import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Employee>;
  public currentUser: Observable<Employee>;

  constructor(private http: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    // console.log("Current User data",this.currentUser);
  }

  public get currentUserValue(): Employee {
    return this.currentUserSubject.value;
  }

  login(form: Credentials) {
    return this.http.post<any>(environment.apiUri + '/employee/authenticate', form, { observe: 'response' })
      .pipe(map(res => {
        // login successful if there's a jwt token in the response
        if (res.body) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res.body));
          this.currentUserSubject.next(res.body);
        }
        return res;
      }));
  }
  // login1(username: string, password: string) {
  //     return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
  //         .pipe(map(user => {
  //             // login successful if there's a jwt token in the response
  //             if (user && user.token) {
  //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                 localStorage.setItem('currentUser', JSON.stringify(user));
  //                 this.currentUserSubject.next(user);
  //             }

  //             return user;
  //         }));
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/enroll/login']);
  }
}
