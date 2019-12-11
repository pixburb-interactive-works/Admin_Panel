import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandComponent} from '../components/app/land/land.component';

const routes: Routes = [
  {path: '', redirectTo: '/land', pathMatch: 'full'},
  {path: 'land', component: LandComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
