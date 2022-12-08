import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChartArea : any = {};
  bigChartColumn : any = {};
  dataChart : any = {};
  cards : any[] = [];
  pieChart : any[] = [];
  areaChart: boolean = false;
  columnChart: boolean = true;
  tableChart: boolean = true;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.dashboardService.disparadorDashboardChartType.subscribe(x => {
      this.evalChartType(x);
    });

    this.dashboardService.disparadorDashboardFilters.subscribe(x => {
      this.areaChart = false;
      this.columnChart = false;
      this.tableChart = false;
       this.dashboardService.getChartData(x.valueGroupedBy, x.invoiceFilter, x.initialPurchaseDateFilter, x.finalPurchaseDateFilter, x.productFilter,
        x.customerRootFilter, x.customerLeafFilter, x.packSizeFilter, x.unitTypeFilter, x.categoryFilter,
        x.distributorRootFilter, x.distributorLeafFilter, x.manufacturerFilter).subscribe(
          data => {
            if(data.responseAudit.codigoRespuesta == '0'){
              this.dataChart = data.responseData;
              console.log('data.responseData: ' + data.responseData);
              this.evalChartType(x.valueChartType);
              this.tableChart = true;
            }
          },
        );

    });

    this.areaChart = false;
    this.columnChart = false;
    this.tableChart = false;
    this.dashboardService.getChartData('product', undefined, undefined, undefined, undefined,
      undefined, undefined, undefined, undefined, undefined,
      undefined, undefined, undefined).subscribe(
        data => {
          if(data.responseAudit.codigoRespuesta == '0'){
            this.dataChart = data.responseData;
            this.columnChart = true;
            this.areaChart = false;
            this.tableChart = true;
          }else{
            console.log('error 1: ', data.responseAudit.codigoRespuesta);
          }
        },
        err => {
          console.log('error 2: ', err.error.mensaje);
        }
      );
  }

  evalChartType(x : string){
    if(x == 'area'){
      this.areaChart = true;
      this.columnChart = false;
    }else if(x == 'column'){
      this.areaChart = false;
      this.columnChart = true;
    }
  }

}
