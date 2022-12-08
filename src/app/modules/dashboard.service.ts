import { EventEmitter, Injectable, Output } from '@angular/core';
import { PeriodicElement } from 'src/app/shared/widgets/table/table.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  @Output() disparadorDashboardChartType: EventEmitter<any> = new EventEmitter();
  @Output() disparadorDashboardFilters: EventEmitter<any> = new EventEmitter();


  //utilitiesURL = 'http://localhost:8091/dashboardUtilities/';
  //principalURL = 'http://localhost:8092/dashboardPrincipal/';

  utilitiesURL = 'http://johnballarte.rosehosting.us/wsu-01/dashboardUtilities/';
  principalURL = 'http://johnballarte.rosehosting.us/wsp-01/dashboardPrincipal/';

  constructor(private httpClient: HttpClient) { }

  private isNumber(param : any) {
    return !isNaN(parseFloat(param)) && !isNaN(param - 0)
  }

  private evalUndefined(param : any){
    var value = '';
    if(param != undefined){
      if(this.isNumber(param)){
        value = param.toString();
      }else{
        value = param;
      }
    }
    return value;
  }

  public getChartData(valueGroupedBy?: string, invoiceFilter?: string, initialPurchaseDateFilter?: Date, finalPurchaseDateFilter?: Date, productFilter?: number,
    customerRootFilter?: number, customerLeafFilter?: number, packSizeFilter?: number, unitTypeFilter?: number, categoryFilter?: number,
    distributorRootFilter?: number, distributorLeafFilter?: number, manufacturerFilter?: number): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })

    console.log("invoiceFilter: " + invoiceFilter);
    console.log("this.evalUndefined(invoiceFilter): " + this.evalUndefined(invoiceFilter));
    return this.httpClient.get<any>(this.principalURL + 'getChartsData?' +
    `groupBy=${this.evalUndefined(valueGroupedBy)}&invoice=${this.evalUndefined(invoiceFilter)}` +
    `&initialPurchaseDate=${this.evalUndefined(initialPurchaseDateFilter)}&finalPurchaseDate=${this.evalUndefined(finalPurchaseDateFilter)}` +
    `&idProduct=${this.evalUndefined(productFilter)}&idCustomerRoot=${this.evalUndefined(customerRootFilter)}` +
    `&idCustomerLeaf=${this.evalUndefined(customerLeafFilter)}&idPackSize=${this.evalUndefined(packSizeFilter)}` +
    `&idUnitType=${this.evalUndefined(unitTypeFilter)}&idCategory=${this.evalUndefined(categoryFilter)}` +
    `&idDistributorRoot=${this.evalUndefined(distributorRootFilter)}&idDistributorLeaf=${this.evalUndefined(distributorLeafFilter)}` +
    `&idManufacturer=${this.evalUndefined(manufacturerFilter)}`, {headers: httpHeaders});
  }

  public getProducts(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getProducts', {headers: httpHeaders});
  }

  public getCustomerRoots(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getCustomerRoots', {headers: httpHeaders});
  }

  public getCustomerLeafs(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getCustomerLeafs', {headers: httpHeaders});
  }

  public getPackSizes(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getPackSizes', {headers: httpHeaders});
  }

  public getUnitTypes(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getUnitTypes', {headers: httpHeaders});
  }

  public getCategories(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getCategories', {headers: httpHeaders});
  }

/*
  public getCategories2() {
    return [
      {
         "value":1,
         "label":"Condiments"
      },
      {
        "value":2,
        "label":"Meat"
      },
      {
        "value":3,
        "label":"Bread"
      },

   ];
  }
*/

  public getDistributorRoots(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getDistributorRoots', {headers: httpHeaders});
  }

  public getDistributorLeafs(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getDistributorLeafs', {headers: httpHeaders});
  }

  public getManufacturers(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'idTransaccion': '00011'
    })
    return this.httpClient.get<any>(this.utilitiesURL + 'getManufacturers', {headers: httpHeaders});
  }

  bigChartArea() {
    return {
      "total":
         {
            "titleText":"Total Purchase",
            "subtitleText":"Total Purchase per product",
            "yAxisText":"United States dollars ($ USD US$)",
            "xAxisText":"Days",
            "valueSuffixTooltip":" USD",
            "valueDecimalsTooltip":2,
            "categories":[
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul"
            ],
            "series":[
               {
                  "name":"Asia",
                  "data":[
                     502.54,
                     635.32,
                     809,
                     947,
                     402,
                     634.72,
                     268
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     106,
                     107,
                     111.61,
                     133,
                     221,
                     767,
                     176.39
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                     163,
                     203,
                     276,
                     408.41,
                     547,
                     729.31,
                     628
                  ]
               },
               {
                  "name":"America",
                  "data":[
                     18,
                     31,
                     54,
                     156,
                     339,
                     818,
                     1201
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     2,
                     2,
                     2,
                     6,
                     13,
                     30,
                     46
                  ]
               }
            ]
         }
      ,
      "quantity":
         {
            "titleText":"Quantity",
            "subtitleText":"Quantity per product",
            "yAxisText":"Unities",
            "xAxisText":"Days",
            "categories":[
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul"
            ],
            "series":[
               {
                  "name":"Asia",
                  "data":[
                     502,
                     635,
                     809,
                     947,
                     1402,
                     3634,
                     5268
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     106,
                     107,
                     111,
                     133,
                     221,
                     767,
                     1766
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                     163,
                     203,
                     276,
                     408,
                     547,
                     729,
                     628
                  ]
               },
               {
                  "name":"America",
                  "data":[
                     18,
                     31,
                     54,
                     156,
                     339,
                     818,
                     1201
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     2,
                     2,
                     2,
                     6,
                     13,
                     30,
                     46
                  ]
               }
            ]
         }
      ,
      "price":
         {
            "titleText":"Price",
            "subtitleText":"Price per product",
            "yAxisText":"United States dollars ($ USD US$)",
            "xAxisText":"Days",
            "categories":[
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul"
            ],
            "series":[
               {
                  "name":"Asia",
                  "data":[
                     502,
                     635,
                     809,
                     947,
                     1402,
                     3634,
                     5268
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     106,
                     107,
                     111,
                     133,
                     221,
                     767,
                     1766
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                     163,
                     203,
                     276,
                     408,
                     547,
                     729,
                     628
                  ]
               },
               {
                  "name":"America",
                  "data":[
                     18,
                     31,
                     54,
                     156,
                     339,
                     818,
                     1201
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     2,
                     2,
                     2,
                     6,
                     13,
                     30,
                     46
                  ]
               }
            ]
         }
      ,
      "table":[
        { idPurchase: 1, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Quarter Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 10, price: 59.99, total: 599.9 },
        { idPurchase: 2, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Half Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 12, price: 49.99, total: 599.88 },
        { idPurchase: 3, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 4, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 5, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 6, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 7, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 8, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 9, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 10, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 11, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 12, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 13, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 14, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 15, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 16, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 17, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 }
      ]
   }
  }


  bigChartArea2() {
    return {
      "total":
         {
            "titleText":"Total Purchase 2",
            "subtitleText":"Total Purchase per product 2",
            "yAxisText":"United States dollars ($ USD US$) 2",
            "xAxisText":"Days",
            "categories":[
               "Jan 2",
               "Feb 2",
               "Mar 2",
               "Apr 2",
               "May 2",
               "Jun 2",
               "Jul 2"
            ],
            "series":[
               {
                  "name":"Antartida",
                  "data":[
                     1,
                     2,
                     3,
                     4,
                     5,
                     6,
                     7
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     7,
                     2,
                     3,
                     4,
                     5,
                     6,
                     1
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                    7,
                    2,
                    3,
                    4,
                    5,
                    6,
                    1
                  ]
               },
               {
                  "name":"America",
                  "data":[
                    3,
                    4,
                    5,
                    6,
                    1,
                    2,
                    3
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     7,
                     3,
                     4,
                     5,
                     6,
                     1,
                     2,
                  ]
               }
            ]
         }
      ,
      "quantity":
         {
            "titleText":"Quantity",
            "subtitleText":"Quantity per product",
            "yAxisText":"Unities",
            "xAxisText":"Days",
            "categories":[
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul"
            ],
            "series":[
               {
                  "name":"Asia",
                  "data":[
                     502,
                     635,
                     809,
                     947,
                     1402,
                     3634,
                     5268
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     106,
                     107,
                     111,
                     133,
                     221,
                     767,
                     1766
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                     163,
                     203,
                     276,
                     408,
                     547,
                     729,
                     628
                  ]
               },
               {
                  "name":"America",
                  "data":[
                     18,
                     31,
                     54,
                     156,
                     339,
                     818,
                     1201
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     2,
                     2,
                     2,
                     6,
                     13,
                     30,
                     46
                  ]
               }
            ]
         }
      ,
      "price":
         {
            "titleText":"Price",
            "subtitleText":"Price per product",
            "yAxisText":"United States dollars ($ USD US$)",
            "xAxisText":"Days",
            "categories":[
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul"
            ],
            "series":[
               {
                  "name":"Asia",
                  "data":[
                     502,
                     635,
                     809,
                     947,
                     1402,
                     3634,
                     5268
                  ]
               },
               {
                  "name":"Africa",
                  "data":[
                     106,
                     107,
                     111,
                     133,
                     221,
                     767,
                     1766
                  ]
               },
               {
                  "name":"Europe",
                  "data":[
                     163,
                     203,
                     276,
                     408,
                     547,
                     729,
                     628
                  ]
               },
               {
                  "name":"America",
                  "data":[
                     18,
                     31,
                     54,
                     156,
                     339,
                     818,
                     1201
                  ]
               },
               {
                  "name":"Oceania",
                  "data":[
                     2,
                     2,
                     2,
                     6,
                     13,
                     30,
                     46
                  ]
               }
            ]
         }
      ,
      "table":[
        { idPurchase: 1, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Quarter Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 10, price: 59.99, total: 599.9 },
        { idPurchase: 2, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Half Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 12, price: 49.99, total: 599.88 },
        { idPurchase: 3, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 4, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 5, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 6, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 7, purchaseDate: '04/20/2022', invoice: '498624', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 8, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 9, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 10, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 11, purchaseDate: '04/20/2022', invoice: '498625', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 12, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 13, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 14, purchaseDate: '04/21/2022', invoice: '498626', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 15, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 16, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 },
        { idPurchase: 17, purchaseDate: '04/21/2022', invoice: '498627', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 }
      ]
   }
  }

  bigChartColumn() {
    return {
    categories: ['Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec' ],
    series: [{
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
          194.1, 95.6, 54.4]
      }, {
          name: 'New York',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
              106.6, 92.3]
      }, {
          name: 'London',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
              51.2]
      }, {
          name: 'Berlin',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
              51.1]
      }
    ]};
  }

  /*
  getTableDatasource() {
     var dataDatasource : PeriodicElement[] = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];

    return dataDatasource;
  }*/

  /*
  'idPurchase',
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
  */

  /*
  getTableDatasource() {
    var dataDatasource : PeriodicElement[] = [
     { idPurchase: 1, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Quarter Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 10, price: 59.99, total: 599.9 },
     { idPurchase: 2, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Half Pounder Pattiess', packSize: '4/100 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 12, price: 49.99, total: 599.88 },
     { idPurchase: 3, purchaseDate: '04/20/2022', invoice: '498623', customerRoot: 'Meat House', customerLeaf: 'Meat House - NY', product: 'Bacon Sausages', packSize: '4/50 CT', unitType: 'CASE', category: 'Meat', distributorRoot: 'East Coast Deliveries', distributorLeaf: 'East Coast Deliveries - NY', manufacturer: 'Georges BBQ Foods', quantity: 8, price: 49.99, total: 399.92 }
   ];

   return dataDatasource;
 }
 */

 /*
  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
  */
}
