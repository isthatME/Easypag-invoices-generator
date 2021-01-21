import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class BillService {

  private readonly chargeACustomerAPI = 'https://sandbox.easypag.com.br/api/v1/invoices'
  private readonly billListAPI = ' https://sandbox.easypag.com.br/api/v1/invoices'

  private listeners = new Subject<any>();

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

  viewBill(billId){
    window.open(`https://sandbox.easypag.com.br/api/v1/invoices/${billId}/view/boleto`, "_blank");
  }

  listen(): Observable<any> {
    return this.listeners.asObservable();
  }
  filter(filterBy: string) {
    this.listeners.next(filterBy)
  }

}
