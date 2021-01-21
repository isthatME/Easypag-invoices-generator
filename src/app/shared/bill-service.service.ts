// import { bill } from './../models/billModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  chargeCustomer(form: Object){
    return this.http.post(this.chargeACustomerAPI, form)
  }

  listBills(): Observable<any>{
    return this.http.get(this.billListAPI)
  }
  cancelBill(billElem: Object){
    return this.http.post(`https://sandbox.easypag.com.br/api/v1/invoices/${billElem}/cancel`, {})
  }
}
