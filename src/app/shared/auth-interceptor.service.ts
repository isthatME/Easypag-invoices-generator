import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = window.btoa("rS5nGmonFbYseCGbGYdefYY71lN4RT61:wvnJXudAQUJzOkiLQXtu5XCQiAS0jFdh9B6mHwSQ")
    req = req.clone({
      setHeaders: {
        Authorization: "Basic " + token
      }
    })

    return next.handle(req)
  }
}