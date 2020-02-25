import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BillingManagerModule } from './modules/billing-manager/billing-manager.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BillingManagerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
