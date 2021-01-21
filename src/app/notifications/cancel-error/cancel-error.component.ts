import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-error',
  templateUrl: './cancel-error.component.html',
  styleUrls: ['./cancel-error.component.css']
})
export class CancelErrorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CancelErrorComponent>
  ) { }

  ngOnInit(): void {
  }

}
