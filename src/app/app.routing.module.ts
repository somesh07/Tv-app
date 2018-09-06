import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { HousesComponent } from './houses/houses.component';
import { CharacterComponent } from './character/character.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HousesdetailsComponent } from './housesdetails/housesdetails.component';

const route: Routes = [
  {path:'',component:HomeComponent},
  {path:'book/:id',component:BookdetailsComponent},
  {path:'houses/:id',component:HousesdetailsComponent},
  {path:'character/:id',component:CharacterdetailsComponent},
   {path:'not-found',component:NotFoundComponent},
 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
