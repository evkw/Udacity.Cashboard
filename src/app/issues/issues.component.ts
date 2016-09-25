import { Component, NgZone, AfterViewInit } from '@angular/core';
import { NG_TABLE_DIRECTIVES } from 'ng2-table';
import { IssueService } from './issue.service';

var $ = require('jquery');
var dataTable = require('datatables');
$.fn.DataTable = dataTable;

$.extend( $.fn.dataTableExt.oSort, {
    "date-uk-pre": function ( a ) {
        if (a == null || a == "") {
            return 0;
        }
        var ukDatea = a.split('/');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },
 
    "date-uk-asc": function ( a, b ) {
      console.log('t4');
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "date-uk-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html'
})
export class IssuesComponent {

  private data: any[] = [];

  public constructor(
    private zone: NgZone,
    private issueSvc: IssueService) {
    this.issueSvc.getIssues()
      .subscribe(issues => {
        this.data = issues;
        this.afterDataLoad();
      });
  }

  afterDataLoad() {
    console.log(this.data);
    $('#example').DataTable({
      data: this.data,
      columnDefs: [
       { type: 'date-uk', targets: 2 }
     ],
      columns: [
        { title: "id" },
        { title: "state" },
        { title: "raised", type: "date-uk" },
        { title: "comments" }
      ]
    });
  }
}