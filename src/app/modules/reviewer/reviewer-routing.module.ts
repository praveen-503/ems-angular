import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [{path:'view-employees', component:ViewEmployeesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewerRoutingModule { }
