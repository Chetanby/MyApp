import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdCoreModule, MdSidenavModule, MdMenuModule } from '@angular/material';
import { LocalForageModule,LocalForageService } from 'ng2-localforage';
import { DataGridModule,DataTableModule,ScheduleModule,DialogModule,CalendarModule,CheckboxModule   } from 'primeng/primeng';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LeftsidebarComponent } from './home/leftsidebar/leftsidebar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CompanyTypesComponent, CompanyTypeItemComponent,CompanyTypeDetailsComponent } from './components/company-types';

import { AuthService } from './services/auth.sevice';
import { ForgotpasswordComponent } from './account/forgotpassword/forgotpassword.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';


const appRouter: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent, children:[
    { path:'company-types', component:CompanyTypesComponent},
    { path:'scheduler', component:SchedulerComponent}
  ] },
  { path: '', component: SigninComponent },
  { path: 'forgot-password', component: ForgotpasswordComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LeftsidebarComponent,
    SigninComponent,
    ForgotpasswordComponent,
    CompanyTypesComponent,
    CompanyTypeDetailsComponent,
    SchedulerComponent
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
    ReactiveFormsModule,
    DataGridModule,
    DataTableModule,
    ScheduleModule,
    DialogModule,
    CalendarModule,
    CheckboxModule
  ],
  providers: [AuthService,LocalForageService],
  bootstrap: [AppComponent],

})

export class AppModule { }
