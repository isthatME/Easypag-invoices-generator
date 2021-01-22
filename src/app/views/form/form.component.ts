import { Bill } from './../../models/billModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillService } from 'src/app/shared/bill-service.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { FormErrorComponent } from 'src/app/notifications/form-error/form-error.component';
import { DialogService } from 'src/app/shared/dialog.service';

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
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      customer: this.formBuilder.group({
        name: ['Giovanne', Validators.required],
        docNumber: ['46434051800', [Validators.required, Validators.minLength(11)]],
        email: ['giovanne@gmail.com', [Validators.required]],
        phoneNumber: ['5585996439955', [Validators.required, Validators.minLength(13)]],
        address: this.formBuilder.group({
          cep: ['11920000', [Validators.required, Validators.minLength(8)]],
          city: ['Santos', [Validators.required]],
          uf: ['SP', [Validators.required]],
          streetNumber: ['250', [Validators.required]],
          area: ['Marapé', [Validators.required]],
          addressLine1: ['Cumbica', [Validators.required]],
        })
      }),
      instructionsMsg: ['Alguma instrução', [Validators.required, Validators.maxLength(100)]],
      notes: ['Algumas notas..', [Validators.required]],
      dueDate: ['23/01/2021', [Validators.required]],
      items: this.formBuilder.array([
        this.formBuilder.group({
          description: ['Fatura...', [Validators.required]],
          quantity: [1, [Validators.required]],
          price: [550, [Validators.required]]
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

    this.dialogService.openConfirmDialog(`Deseja criar uma cobrança para ${formObj.customer.name}?`)
      .afterClosed().subscribe((res: any) => {
        if (res) {
          this.billService.chargeCustomer(formObj).subscribe((data: Bill) => {
            console.log('succes', data)
            this.router.navigate(['/bill'])
          },
            error => {
              const dialogConfig = new MatDialogConfig();
              dialogConfig.height = '10rem'
              this.dialogService.errorOnSubmitForm('Há campos ausentes ou inválidos')
            }
          )
        }
      })
      

  }
}
