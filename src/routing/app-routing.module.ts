import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandComponent} from '../components/app/land/land.component';
import { LoginComponent } from 'src/components/app/login/login.component';
import {HomeComponent} from '../components/app/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/land', pathMatch: 'full'},
  {path: 'land', component: LandComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
