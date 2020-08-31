import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PlaceComponent } from './place/place.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  { path:'', redirectTo: '/place', pathMatch: 'full'},
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'place', component: PlaceComponent },
  { path:'favorites', component: FavoritesComponent },
  { path:'slider', component: SliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
