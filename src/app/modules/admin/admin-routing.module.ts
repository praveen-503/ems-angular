import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewEmployeeDisignationComponent } from './view-employee-disignation/view-employee-disignation.component';


const routes: Routes = [
  {path:'',component:AdminComponent,
   children:[{path:'add-client',component:AddClientComponent},
  {path:'add-project',component:AddProjectComponent},
{path:'view-employee',component:ViewEmployeeDisignationComponent}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
