import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './views/form/form.component';
import { BillListComponent } from './views/bill-list/bill-list.component';

const routes: Routes = [
  { path: '', component: BillListComponent },
  { path: 'form', component: FormComponent },
  { path: 'bill', component: BillListComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
