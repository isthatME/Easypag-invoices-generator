import { BillService } from 'src/app/shared/bill-service.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements AfterViewInit  {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['status','name', 'price', 'createdAt','dueDate','actions'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private billService: BillService,
    private dialog: MatDialog
    ) { }
  ngAfterViewInit(): void {       
    this.onLoad()
  }

  onLoad(){
    this.billService.listBills().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data.results)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }
  onView(billId){
    window.open(`https://sandbox.easypag.com.br/api/v1/invoices/${billId.id}/view/boleto`, "_blank");
  }

  onCancel(elem){
    this.billService.cancelBill(elem.id).subscribe((data: Object) => {
      console.log('succes', data)
      this.onLoad()
    })
    this.onLoad()
  }
  onCreate(){
    this.dialog.open(FormComponent);
  }
}
