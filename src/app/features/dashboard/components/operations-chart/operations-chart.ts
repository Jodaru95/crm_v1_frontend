import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  NgApexchartsModule,
  ApexYAxis
} from 'ng-apexcharts';

@Component({
  selector: 'app-operations-chart',
  imports: [NgApexchartsModule],
  templateUrl: './operations-chart.html',
  styleUrl: './operations-chart.scss'
})
export class OperationsChart {

  // datos
  series: ApexAxisChartSeries = [
    {
      name: 'Operaciones',
      data: [42, 58, 51, 73, 64, 38, 29]
    }
  ];

  // tipo/tamaño/comportamiento
  chart: ApexChart = {
    type: 'line',
    height: 320,
    toolbar: {
      show: false
    }
  };

  // dias
  xaxis: ApexXAxis = {
    categories: [
      'Lun',
      'Mar',
      'Mié',
      'Jue',
      'Vie',
      'Sáb',
      'Dom'
    ]
  };

  // escala vertical
  yaxis: ApexYAxis = {
    min: 0,
    forceNiceScale: true
  };

  // apariencia de la línea
  stroke: ApexStroke = {
    curve: 'smooth',
    width: 3
  };

  // información al pasar el ratón
  tooltip: ApexTooltip = {
    enabled: true,
    y: {
      formatter: (value: number) => `${value} operaciones`
    }
  };
}