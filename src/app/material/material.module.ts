import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';

const Material=[
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatSliderModule,
  MatDividerModule
]


@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
