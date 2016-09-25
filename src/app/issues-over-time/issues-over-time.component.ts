import { Component, NgZone } from '@angular/core';

import { Dataset } from '../shared/dataset.model';
import { IssuesOverTimeService } from './issues-over-time.service';

@Component({
  selector: 'app-issues-over-time',
  templateUrl: './issues-over-time.component.html',
  styleUrls: ['./issues-over-time.component.css']
})
export class IssuesOverTimeComponent { 
  
  public datasets = [
    new Dataset("# of Issues")
  ]

  public labels = [];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor(
    private issueSvc: IssuesOverTimeService,
    private zone: NgZone
  ) {
    this.issueSvc.getIssuesOverTime()
      .forEach(result => {
        this.zone.run(() => {
          this.labels = this.getLabels(result)
          this.getData(result);
        });
      });
  }

  getLabels(result: any[]) {
    let labels = []
    result.forEach(r => {
      labels.push(r.period)
    })
    return labels;
  };

  getData(result: any[]) {
    result.forEach(r => {
      this.datasets[0].data.push(r.numOfIssues);
    })
  }
}

