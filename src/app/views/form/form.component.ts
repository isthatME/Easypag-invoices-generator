import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from 'src/app/shared/bill-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  selected = '';
  constructor(
    private formBuilder: FormBuilder,
    private billService: BillService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: [null, Validators.required],
        docNumber: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phoneNumber: [null, [Validators.required]],
        address: this.formBuilder.group({
          cep: [null, Validators.required],
          city: [null, Validators.required],
          // uf: [null, Validators.required],
          streetNumber: [null, Validators.required],
          area: [null, Validators.required],
          addressLine1: [null, Validators.required],
        })
      }),
      instructionsMsg : [null, Validators.required],
      notes : [null, Validators.required],
      dueDate: [null, Validators.required],
      items: this.formBuilder.array([
        this.formBuilder.group({
          description: [null, Validators.required],
          quantity: [null, Validators.required],
          price: [null, Validators.required]
        })
      ])
    });
  }
  onSubmit() {
    const formObj = {
      customer: {
        name : this.form.value.customer.docNumber,
        docNumber : this.form.value.customer.docNumber,
        email : this.form.value.customer.email,
        phoneNumber : this.form.value.customer.phoneNumber,
        address : {
          cep : this.form.value.customer.address.cep,
          city : this.form.value.customer.address.city,
          uf : this.selected,
          streetNumber : this.form.value.customer.address.streetNumber,
          area : this.form.value.customer.address.area,
          addressLine1 : this.form.value.customer.address.addressLine1,
        } 
      },
      instructionsMsg : this.form.value.instructionsMsg,
      notes : this.form.value.notes,
      dueDate : this.form.value.dueDate,
      items : [{
        description : this.form.value.items[0].description,
        quantity : parseInt(this.form.value.items[0].quantity),
        price :  parseInt(this.form.value.items[0].price),
      }]
    }
    this.billService.chargeCustomer(formObj).subscribe((data: Object) => {
      console.log('succes', data)
      this.router.navigate(['/bill'])
    })
  }
}
