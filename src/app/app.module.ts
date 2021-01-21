import { BillListComponent } from './views/bill-list/bill-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './shared/auth-interceptor.service'
import { MaterialModule } from './material/material.module'
import { FormComponent } from './views/form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './views/navbar/navbar.component'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormErrorComponent } from './notifications/form-error/form-error.component';
import { ConfirmComponent } from './notifications/confirm/confirm.component';
import { CancelErrorComponent } from './notifications/cancel-error/cancel-error.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    BillListComponent,
    FormErrorComponent,
    ConfirmComponent,
    CancelErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS ,useClass: AuthInterceptorService ,multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent,FormErrorComponent, ConfirmComponent, CancelErrorComponent]
})
export class AppModule { }


