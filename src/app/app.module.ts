import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkMenuComponent } from './link-menu/link-menu.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ReadingsectionComponent } from './readingsection/readingsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LinkMenuComponent,
    AddpostComponent,
    ReadingsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
