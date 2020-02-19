import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingManagerRoutingModule } from './billing-manager-routing.module';
import { BillingManagerComponent } from './billing-manager.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';


@NgModule({
  declarations: [BillingManagerComponent, AddProjectsComponent, ViewProjectsComponent],
  imports: [
    CommonModule,
    BillingManagerRoutingModule
  ]
})
export class BillingManagerModule { }
