import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './routing/app-routing.module';

import { AppComponent } from './components/app/app.component';
import { LandComponent } from './components/app/land/land.component';
import { LoginComponent } from './components/app/login/login.component';
import { SignupComponent } from './components/app/signup/signup.component';
import { HomeComponent } from './components/app/home/home.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
