import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';


const routes: Routes = []


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingManagerRoutingModule { }
