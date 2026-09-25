import { Component } from '@angular/core';
import {
    ApexChart,
    ApexNonAxisChartSeries,
    ApexLegend,
    ApexDataLabels,
    ApexTooltip,
    NgApexchartsModule
} from 'ng-apexcharts';

@Component({
    selector: 'app-operations-status-chart',
    imports: [NgApexchartsModule],
    templateUrl: './operations-status-chart.html',
    styleUrl: './operations-status-chart.scss'
})
export class OperationsStatusChart {

    series: ApexNonAxisChartSeries = [
        2180,
        124,
        80
    ];

    chart: ApexChart = {
        type: 'donut',
        height: 320
    };

    labels: string[] = [
        'Completadas',
        'Pendientes',
        'Canceladas'
    ];

    legend: ApexLegend = {
        position: 'bottom'
    };

    dataLabels: ApexDataLabels = {
        enabled: false
    };

    tooltip: ApexTooltip = {
        enabled: true
    };
}