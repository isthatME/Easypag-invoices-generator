import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { NavComponent } from '../navbar/nav/nav.component';
import { AppComponent } from '../app.component';


const appRoutes: Routes = [
  { path: '/', component: AppComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }
