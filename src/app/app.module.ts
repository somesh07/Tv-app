import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HousesComponent } from './houses/houses.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { HousesdetailsComponent } from './housesdetails/housesdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { BookService } from './service/book.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    CharacterComponent,
    HousesComponent,
    BookdetailsComponent,
    CharacterdetailsComponent,
    HousesdetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
