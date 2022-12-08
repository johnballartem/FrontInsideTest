import { Input, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface PeriodicElement {
  idPurchase: number;
  purchaseDate: string;
  invoice: string;
  customerRoot: string;
  customerLeaf: string;
  product: string;
  packSize: string;
  unitType: string;
  category: string;
  distributorRoot: string;
  distributorLeaf: string;
  manufacturer: string;
  quantity: number;
  price: number;
  total: number;
}

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['idPurchase',
  'purchaseDate',
  'invoice',
  'customerRoot',
  'customerLeaf',
  'product',
  'packSize',
  'unitType',
  'category',
  'distributorRoot',
  'distributorLeaf',
  'manufacturer',
  'quantity',
  'price',
  'total'];

  @Input() dataSource: any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  Highcharts = Highcharts;

  constructor(private dashboardService: DashboardService,
              private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource);
    this.dataSource.paginator = this.paginator;

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
