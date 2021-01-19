import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  readonly API = 'https://sandbox.easypag.com.br/api/v1/customers'

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<any> {
    return this.http.get<any>(this.API)
  }
}
