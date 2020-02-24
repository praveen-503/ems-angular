import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  //{path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:'./modules/home/home.module#HomeModule'},
  {path:'admin',loadChildren:'./modules/admin/admin.module#AdminModule'},
  {path:'enroll',loadChildren:'./modules/enroll/enroll.module#EnrollModule'},
  {path:'billing-manager',loadChildren:'./modules/billing-manager/billing-manager.module#BillingManagerModule'},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
