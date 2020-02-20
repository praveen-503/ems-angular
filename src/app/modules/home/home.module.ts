import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, TimesheetComponent, NewUserStoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
})
export class HomeModule { }
