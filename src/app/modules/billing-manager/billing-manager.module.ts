import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingManagerRoutingModule } from './billing-manager-routing.module';

import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BillingManagerComponent } from './billing-manager.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';




@NgModule({
  declarations: [BillingManagerComponent, AddProjectsComponent, ViewProjectsComponent, AddClientsComponent, ViewClientsComponent],
  imports: [
    CommonModule,
    BillingManagerRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
  ]
})
export class BillingManagerModule { }
