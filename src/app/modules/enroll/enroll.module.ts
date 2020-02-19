import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollRoutingModule } from './enroll-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    EnrollRoutingModule,
    
  ]
})
export class EnrollModule { }
