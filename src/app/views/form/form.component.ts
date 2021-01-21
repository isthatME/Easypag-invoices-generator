import { Bill } from './../../models/billModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from 'src/app/shared/bill-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormErrorComponent } from 'src/app/notifications/form-error/form-error.component';

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
    private router: Router,
    private dialog: MatDialog
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
          uf: [null, Validators.required],
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
    //copy the current form so it's continue imutable
    const formObj: Bill = Object.assign(this.form.value)

    // set the quantity and price property as number to fit in the bill model
    formObj.items[0].quantity = Number(this.form.value.items[0].quantity)
    formObj.items[0].price = Number(this.form.value.items[0].price)

    
    this.billService.chargeCustomer(formObj).subscribe((data: Bill) => {
      console.log('succes', data)
      this.router.navigate(['/bill'])
    },
     error =>  {
       const dialogConfig = new MatDialogConfig();
       dialogConfig.height = '10rem'
       this.dialog.open(FormErrorComponent)
      }
)
  }
}
