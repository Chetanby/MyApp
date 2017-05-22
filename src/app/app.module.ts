import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdCoreModule,MdSidenavModule,MdMenuModule } from '@angular/material';
import {SlimScroll} from 'angular2-slimscroll';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LeftsidebarComponent } from './home/leftsidebar/leftsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LeftsidebarComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MdCoreModule,
    MdSidenavModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
