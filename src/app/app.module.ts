import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuorderComponent } from './components/menuorder/menuorder.component';
import { RestaurantpagesComponent } from './components/restaurantpages/restaurantpages.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    HeaderComponent,
    SignInComponent,
    MenuComponent,
    RestaurantComponent,
    FooterComponent,
    MenuorderComponent,
    RestaurantpagesComponent,
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
