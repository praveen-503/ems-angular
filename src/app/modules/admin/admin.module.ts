import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewEmployeeDisignationComponent } from './view-employee-disignation/view-employee-disignation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBillingManagerComponent } from './add-billing-manager/add-billing-manager.component';
import { AddReviewerComponent } from './add-reviewer/add-reviewer.component';
import { AssigingRoleComponent } from './assiging-role/assiging-role.component';


@NgModule({
  declarations: [AdminComponent, AddClientComponent, AddProjectComponent, ViewEmployeeDisignationComponent, AddBillingManagerComponent, AddReviewerComponent, AssigingRoleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
