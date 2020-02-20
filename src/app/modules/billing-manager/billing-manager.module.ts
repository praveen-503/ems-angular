import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingManagerRoutingModule } from './billing-manager-routing.module';

import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BillingManagerComponent } from './billing-manager.component';




@NgModule({
  declarations: [BillingManagerComponent, AddProjectsComponent, ViewProjectsComponent],
  imports: [
    CommonModule,
    BillingManagerRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
  ]
})
export class BillingManagerModule { }
