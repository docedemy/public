import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CssgridComponent} from './cssgrid/cssgrid.component'

const routes: Routes = [
  { path: 'cssgrid', component: CssgridComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
