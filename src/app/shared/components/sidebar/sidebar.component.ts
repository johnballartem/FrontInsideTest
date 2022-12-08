import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  valueGroupedBy = 'product'
  valueChartType = 'column';
  products : any [] = [];
  customerRoots : any [] = [];
  customerLeafs : any [] = [];
  packSizes : any [] = [];
  unitTypes : any [] = [];
  categories : any [] = [];
  distributorRoots : any [] = [];
  distributorLeafs : any [] = [];
  manufacturers : any [] = [];

  invoiceFilter: string = "";
  initialPurchaseDateFilter: Date;
  finalPurchaseDateFilter: Date;
  productFilter: number;
  customerRootFilter: number;
  customerLeafFilter: number;
  packSizeFilter: number;
  unitTypeFilter: number;
  categoryFilter: number;
  distributorRootFilter: number;
  distributorLeafFilter: number;
  manufacturerFilter: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCustomerRoots();
    this.getCustomerLeafs();
    this.getPackSizes();
    this.getUnitTypes();
    this.getCategories();
    this.getDistributorRoots();
    this.getDistributorLeafs();
    this.getManufacturers();
  }

  getProducts(){
    //get data categories
    this.dashboardService.getProducts().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.products = data.commonBeanResponseList;
        }
      },
    );
  }

  getCustomerRoots(){
    //get data categories
    this.dashboardService.getCustomerRoots().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.customerRoots = data.commonBeanResponseList;
        }
      },
    );
  }

  getCustomerLeafs(){
    //get data categories
    this.dashboardService.getCustomerLeafs().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.customerLeafs = data.commonBeanResponseList;
        }
      },
    );
  }

  getPackSizes(){
    //get data categories
    this.dashboardService.getPackSizes().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.packSizes = data.commonBeanResponseList;
        }
      },
    );
  }

  getUnitTypes(){
    //get data categories
    this.dashboardService.getUnitTypes().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.unitTypes = data.commonBeanResponseList;
        }
      },
    );
  }

  getCategories(){
    //get data categories
    this.dashboardService.getCategories().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.categories = data.commonBeanResponseList;
        }
      },
    );
  }

  getDistributorRoots(){
    //get data categories
    this.dashboardService.getDistributorRoots().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.distributorRoots = data.commonBeanResponseList;
        }
      },
    );
  }

  getDistributorLeafs(){
    //get data categories
    this.dashboardService.getDistributorLeafs().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.distributorLeafs = data.commonBeanResponseList;
        }
      },
    );
  }

  getManufacturers(){
    //get data categories
    this.dashboardService.getManufacturers().subscribe(
      data => {
        if(data.responseAudit.codigoRespuesta == '0'){
          this.manufacturers = data.commonBeanResponseList;
        }
      },
    );
  }

  onChangeChartType() {
    this.dashboardService.disparadorDashboardChartType.emit(this.valueChartType);
  }

  getDataFiltered() {
    this.dashboardService.disparadorDashboardFilters.emit({
      valueChartType: this.valueChartType,
      valueGroupedBy: this.valueGroupedBy,
      invoiceFilter: this.invoiceFilter,
      initialPurchaseDateFilter: this.initialPurchaseDateFilter,
      finalPurchaseDateFilter: this.finalPurchaseDateFilter,
      productFilter: this.productFilter,
      customerRootFilter: this.customerRootFilter,
      customerLeafFilter: this.customerLeafFilter,
      packSizeFilter: this.packSizeFilter,
      unitTypeFilter: this.unitTypeFilter,
      categoryFilter: this.categoryFilter,
      distributorRootFilter: this.distributorRootFilter,
      distributorLeafFilter: this.distributorLeafFilter,
      manufacturerFilter: this.manufacturerFilter
    });
  }

}
