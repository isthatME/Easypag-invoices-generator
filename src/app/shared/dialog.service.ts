import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelErrorComponent } from '../notifications/cancel-error/cancel-error.component';
import { ConfirmComponent } from '../notifications/confirm/confirm.component';
import { FormErrorComponent } from '../notifications/form-error/form-error.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  open(comp){
      return this.dialog.open(comp)
  } 

  openConfirmDialog(msg: string){
   return this.dialog.open(ConfirmComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '10px'},
      data: {
        message: msg
      }
    })
  }
  errorOnSubmitForm(msg: string){
    return this.dialog.open(FormErrorComponent, {
       position: { top: '10px'},
       data: {
         message: msg
       }
     })
   }
  errorOnCancelDialog(msg: string){
    return this.dialog.open(CancelErrorComponent, {
      position: { top: '10px'},
       data: {
         message: msg
       }
     })
   }
}
