import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewEmployeeDisignationComponent } from './view-employee-disignation/view-employee-disignation.component';


@NgModule({
  declarations: [AdminComponent, AddClientComponent, AddProjectComponent, ViewEmployeeDisignationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
