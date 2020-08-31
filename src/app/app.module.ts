import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlaceComponent } from './place/place.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PlaceComponent,
    FavoritesComponent,
    SliderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
