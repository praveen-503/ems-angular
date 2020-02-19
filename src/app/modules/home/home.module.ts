import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, TimesheetComponent, NewUserStoryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
