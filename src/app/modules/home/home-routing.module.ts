import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,  RouterModule } from '@angular/router';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';
import { TimesheetComponent } from './timesheet/timesheet.component';


const routes: Routes = [
  {path:'', children:[
    {path:'',redirectTo:'time-sheet', pathMatch:'full'},
    {path:'time-sheet', component:TimesheetComponent}, 
    {path:'new-user-story',component:NewUserStoryComponent}
  ]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
