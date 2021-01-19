import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './shared/auth-interceptor.service'
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS ,useClass: AuthInterceptorService ,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
