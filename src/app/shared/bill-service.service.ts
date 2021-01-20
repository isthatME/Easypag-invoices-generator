// import { bill } from './../models/billModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private readonly chargeACustomerAPI = 'https://sandbox.easypag.com.br/api/v1/invoices'
  private readonly billListAPI = ' https://sandbox.easypag.com.br/api/v1/invoices'


  constructor(private http: HttpClient) { }

  chargeCustomer(form: FormGroup){
    return this.http.post(this.chargeACustomerAPI, form)
  }

  listBills(): Observable<any>{
    return this.http.get(this.billListAPI)
  }
  // cancelBill(id, bll): Observable<any>{
  //   return this.http.post(`https://sandbox.easypag.com.br/api/v1/invoices/${id}/cancel`,bill)
  // }
}
