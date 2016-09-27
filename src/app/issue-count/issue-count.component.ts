import { Component, OnInit, OnDestroy } from '@angular/core';

import * as Rx from 'rxjs/Rx';

import { IssueCountService } from './issue-count.service';

@Component({
  selector: 'app-issue-count',
  templateUrl: './issue-count.component.html',
  styleUrls: ['./issue-count.component.css']
})
export class IssueCountComponent {

  public openIssueCount: number;
  public observer

  constructor(private countSvc: IssueCountService) {}

  ngOnInit() {
    this.observer = Rx.Observable.interval(1000)
      .exhaustMap(() => this.countSvc.getOpenIssueCount())
      .startWith(0)
      .subscribe(x => this.openIssueCount = x)
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }
}
