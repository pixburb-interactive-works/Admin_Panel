import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { LandComponent } from './components/app/land/land.component';
import { LoginComponent } from './components/app/login/login.component';
import { SignupComponent } from './components/app/signup/signup.component';
import { HomeComponent } from './components/app/home/home.component';
import {AppRoutingModule} from './routing/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
