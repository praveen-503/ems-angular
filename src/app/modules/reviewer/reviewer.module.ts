import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerComponent } from './reviewer.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';


@NgModule({
  declarations: [ReviewerComponent, ViewEmployeesComponent],
  imports: [
    CommonModule,
    ReviewerRoutingModule
  ]
})
export class ReviewerModule { }
