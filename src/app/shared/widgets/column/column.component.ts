import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
declare var $: any;

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data: any = [];

  constructor() { }

  ngOnInit() {

    this.chartOptions = this.onChangeChartOptions();

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  ngOnChanges() {
    //Highcharts.chart('container', this.onChangeChartOptions());
  }

  onChangeChartOptions(){
    return {
      chart: {
          type: 'column'
      },
      title: {
          text: this.data.titleText
      },
      subtitle: {
          text: this.data.subtitleText
      },
      xAxis: {
          categories: this.data.categories,
          crosshair: true,
          title: {
            text: this.data.xAxisText
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: this.data.yAxisText
          }
      },
      tooltip: {
          valueSuffix: this.data.valueSuffixTooltip,
          valueDecimals: this.data.valueDecimalsTooltip,
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: this.data.series
    };
  }


}
