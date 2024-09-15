import { Component, AfterViewChecked, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import Chart from 'chart.js/auto';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements AfterViewChecked {
  // Chart object
  chart: any;
  // Chart data
  chartData:any = {
    labels: [], // labels for x-axis
    values: [] // values for y-axis
  };

  constructor(@Inject(DOCUMENT) private document: Document, private dataService: DataService) {
    // Subscribe to dataEntries$ observable and update chart when data changes
    this.dataService.dataEntries$.subscribe((entries) => {
      this.updateChart(entries);
    });
  }

  ngAfterViewChecked(): void {
    // Check if chart has been created yet
    if (!this.chart) {
      // Create chart if it doesn't exist
      this.createChart();
    }
  }

  /**
   * Creates a new chart in the 'canvas' element
   */
  createChart(): void {
    const canvas = this.document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    // Create chart with options
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.chartData.labels,
        datasets: [
          {
            label: 'Temperature',
            data: this.chartData.values,
            borderWidth: 1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  /**
   * Updates the chart with new data entries
   * @param entries New data entries
   */
  updateChart(entries: { datetime: string; temperature: number }[]): void {
    // Update chart data
    this.chartData.labels = entries.map(entry => entry.datetime);
    this.chartData.values = entries.map(entry => entry.temperature);

    // Update chart if it exists
    if (this.chart) {
      this.chart.data.labels = this.chartData.labels;
      this.chart.data.datasets[0].data = this.chartData.values;
      this.chart.update();
    }
  }
}

