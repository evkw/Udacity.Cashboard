import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssueService } from './issue.service';

import * as Rx from 'rxjs/Rx';

let $ = require('jquery');
let dataTable = require('datatables');
$.fn.DataTable = dataTable;

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit, OnDestroy {

  private data: any[] = [];
  private observer;
  private issueCount;


  public constructor(private issueSvc: IssueService) {
    this.issueSvc.getIssues()
      .subscribe(x => {
        this.issueCount = x.length;
        this.data = x;
        this.afterDataLoad();
      });
  }


  ngOnInit() {
    this.observer = Rx.Observable.interval(1000)
      .exhaustMap(() => this.issueSvc.getIssues())
      .startWith(0)
      .subscribe(x => {
        this.data = x;
        if (this.issueCount !== this.data.length) {
          this.issueCount = this.data.length;
          this.afterDataLoad(true);
        }
      })
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

  afterDataLoad(reload = false) {
    if (reload) {
      $('#example').DataTable.destroy();
    }

    $('#example').DataTable({
      responsive: true,
      data: this.data,
      columns: [
        { title: 'Submitted' },
        { title: 'State' },
        { title: 'Time Closed' },
        { title: 'Description' },
        { title: 'Customer Name' },
        { title: 'Customer Email' },
        { title: 'Employee Email' }
      ]
    });
  }
}
