import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Dataset } from '../shared/dataset.model';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent implements OnInit, OnDestroy {

  public observer;
  public recordLength;
  public datasets = [new Dataset('# of users')]
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
    private userSvc: UserService) {
    this.userSvc.getUsersOverTime()
      .forEach(result => {
          this.recordLength = result.length;
          this.labels = this.getLabels(result);
          this.getData(result);
        });
  }

  ngOnInit() {
    this.observer = Rx.Observable.interval(1000)
      .exhaustMap(() => this.userSvc.getUsersOverTime())
      .startWith(0)
      .subscribe(result => {
        if (result.length !== this.recordLength) {
           this.labels = this.getLabels(result);
          this.getData(result);
        }
      })
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
      this.datasets[0].data.push(r.newUsers);
    });
  }
}
