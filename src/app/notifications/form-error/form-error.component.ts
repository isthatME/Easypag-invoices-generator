import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  constructor(  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<FormErrorComponent>) { }

  ngOnInit(): void {
  }

}
