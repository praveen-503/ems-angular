import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { BillingManagerComponent } from './billing-manager.component';


const routes: Routes = [
  {path:'',component:BillingManagerComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingManagerRoutingModule { }
