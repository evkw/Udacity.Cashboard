import { Component, OnInit, OnDestroy } from '@angular/core';

import { Dataset } from '../shared/dataset.model';
import { IssuesOverTimeService } from './issues-over-time.service';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-issues-over-time',
  templateUrl: './issues-over-time.component.html',
  styleUrls: ['./issues-over-time.component.css']
})
export class IssuesOverTimeComponent implements OnInit, OnDestroy {
  public observer;
  public recordLength;
  public datasets = [new Dataset('# of Issues')];
  public labels = [];
  public options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor(
    private issueSvc: IssuesOverTimeService) {
    this.issueSvc.getIssuesOverTime()
      .forEach(result => {
        this.recordLength = result.length;
        this.labels = this.getLabels(result);
        this.getData(result);
      });
  }

  ngOnInit() {
    this.observer = Rx.Observable.interval(1000)
      .exhaustMap(() => this.issueSvc.getIssuesOverTime())
      .startWith(0)
      .subscribe(result => {
        if (result.length !== this.recordLength) {
          this.labels = this.getLabels(result);
          this.getData(result);
        }
      });
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

  getLabels(result: any[]) {
    let labels = [];
    result.forEach(r => {
      labels.push(r.period);
    });
    return labels;
  };

  getData(result: any[]) {
    result.forEach(r => {
      this.datasets[0].data.push(r.numOfIssues);
    })
  }
}

