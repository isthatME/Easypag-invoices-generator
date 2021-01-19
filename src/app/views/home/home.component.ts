import { Component, OnInit } from '@angular/core';
import { BillServiceService } from 'src/app/share/bill-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private billService: BillServiceService) { }

  ngOnInit(): void {
    this.billService.getAllCustomers().subscribe(data => {
      console.log(data)
    })
  }

}
