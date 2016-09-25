import { Component, NgZone } from '@angular/core';

import { UserService } from './user.service';
import { Dataset } from '../shared/dataset.model';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent {

  public datasets = [
    new Dataset("# of users")
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
    private userSvc: UserService,
    private zone: NgZone
  ) {
    this.userSvc.getUsersOverTime()
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
      this.datasets[0].data.push(r.newUsers);
    })
  }
}
