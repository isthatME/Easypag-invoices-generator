import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './views/form/form.component'
import { BillListComponent } from './views/bill-list/bill-list.component'


const appRoutes: Routes = [
  { path: '', component: BillListComponent },
  { path: 'form', component: FormComponent },
  { path: 'bill', component: BillListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
