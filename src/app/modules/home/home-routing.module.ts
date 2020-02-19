import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes,  RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewUserStoryComponent } from './new-user-story/new-user-story.component';


const routes: Routes = [
  {path:'',component:HomeComponent,children:[
    {path:'new-user-story',component:NewUserStoryComponent}
  ]}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
