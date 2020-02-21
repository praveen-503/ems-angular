import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< .mine
import { AdminModule } from './modules/admin/admin.module';
import { AdminComponent } from './modules/admin/admin.component';
=======
import { AdminModule } from './modules/admin/admin.module';

>>>>>>> .theirs


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    AdminModule
    AdminModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
