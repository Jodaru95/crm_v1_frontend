import { Component } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTooltip,
    NgApexchartsModule
} from 'ng-apexcharts';

@Component({
    selector: 'app-operations-type-chart',
    imports: [NgApexchartsModule],
    templateUrl: './operations-type-chart.html',
    styleUrl: './operations-type-chart.scss'
})
export class OperationsTypeChart {

    series: ApexAxisChartSeries = [
        {
            name: 'Operaciones',
            data: [1240, 780, 520, 210]
        }
    ];

    chart: ApexChart = {
        type: 'bar',
        height: 320,
        toolbar: {
            show: false
        }
    };

    xaxis: ApexXAxis = {
        categories: [
            'Transferencia',
            'Pago',
            'Ingreso',
            'Retirada'
        ]
    };

    tooltip: ApexTooltip = {
        enabled: true,
        y: {
            formatter: (value: number) => `${value} operaciones`
        }
    };
}