import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:'./modules/home/home.module#HomeModule'},
  {path:'enroll',loadChildren:'./modules/enroll/enroll.module#EnrollModule'},
  {path:'billing-manager',loadChildren:'./modules/billing-manager/billing-manager.component#BillingManagerComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
