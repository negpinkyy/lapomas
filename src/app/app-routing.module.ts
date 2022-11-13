import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantpagesComponent } from './components/restaurantpages/restaurantpages.component';
import { MenuorderComponent } from './components/menuorder/menuorder.component'; 
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'sign-in', component:SignInComponent},
  {path: 'menu', component:MenuComponent},
   {path: 'menu/:id', component:MenuorderComponent},
  {path: 'restaurant', component:RestaurantComponent},
  {path: 'restaurant/:id', component:RestaurantpagesComponent},
  {path: 'footer', component:FooterComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
