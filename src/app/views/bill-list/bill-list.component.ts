import { BillService } from 'src/app/shared/bill-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'price', 'createdAt','dueDate','actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.billService.listBills().subscribe((data:any) => {
     this.dataSource = data.results
     this.listData = new MatTableDataSource(data.result)
    })
  }


}
