import { BillService } from 'src/app/shared/bill-service.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormComponent } from '../form/form.component';
import { DialogService } from 'src/app/shared/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements AfterViewInit {

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['status', 'name', 'price', 'createdAt', 'dueDate', 'actions'];
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private billService: BillService,
    private dialogService: DialogService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  ngAfterViewInit(): void {
    this.onLoad()
  }

  onLoad() {
    this.billService.listBills().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.results)
      this.dataSource.paginator = this.paginator
      this.isLoading = false;
    })
  }
  onView(billId) {
    this.billService.viewBill(billId.id);
  }

  onCancel(elem) {
    this.router.navigateByUrl('/bill')
      // this.dialogService.openConfirmDialog("Tem certeza que deseja cancelar essa cobrança?")
      // .afterClosed().subscribe((res: any) => {
      //   if (res) {
      //     this.billService.cancelBill(elem.id).subscribe((data: Object) => {
      //       console.log('succes', data)
      //       }, error => this.dialogService.errorOnCancelDialog('Não é possível cancelar essa cobrança'))
      //     }
      //   })
  }
  onCreate() {
    this.dialogService.open(FormComponent);
  }
}
