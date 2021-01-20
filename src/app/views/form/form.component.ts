import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillService } from 'src/app/shared/bill-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private billService: BillService
    ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: [null, Validators.required],
        docNumber: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phoneNumber: [null, [Validators.required]],
        maturityDate: [null, [Validators.required]],
      }),
      adress: this.formBuilder.group({
        cep: [null, Validators.required],
        city: [null, Validators.required],
        uf: [null, Validators.required],
        streetNumber: [null, Validators.required],
        area: [null, Validators.required],
        addressLine1: [null, Validators.required],
        complement: [null, Validators.required]
      }),
      dueDate: [null, Validators.required],
      items: this.formBuilder.group({
        description: [null, Validators.required],
        quantity: [null, Validators.required],
        price: [null, Validators.required]
      })
    });
  }
  
  onSubmit(form: FormGroup){
    parseInt(form.value.items.price) 
    parseInt(form.value.items.quantity) 
    this.billService.chargeCustomer(form.value)
    console.log(form.value)
    form.reset()
  }
}
