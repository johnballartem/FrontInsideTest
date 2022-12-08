import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    console.log('data: ' + this.data);
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: this.data.titleText
      },
      subtitle: {
        text: this.data.subtitleText
      },
      tooltip: {
        split: true,
        valueSuffix: this.data.valueSuffixTooltip,
        valueDecimals: this.data.valueDecimalsTooltip,
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
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
      series: this.data.series
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
