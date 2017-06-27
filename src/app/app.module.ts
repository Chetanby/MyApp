import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdCoreModule, MdSidenavModule, MdMenuModule } from '@angular/material';
import { SlimScroll } from 'angular2-slimscroll';
import { LocalForageModule,LocalForageService } from 'ng2-localforage';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LeftsidebarComponent } from './home/leftsidebar/leftsidebar.component';
import { SigninComponent } from './auth/signin/signin.component';


import { AuthService } from './services/auth.sevice';


const appRouter: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftsidebarComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MdCoreModule,
    MdSidenavModule,
    MdMenuModule,
    RouterModule.forRoot(appRouter),
    LocalForageModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [AuthService,LocalForageService],
  bootstrap: [AppComponent],

})

export class AppModule { }
