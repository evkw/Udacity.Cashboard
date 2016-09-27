import { Component, OnInit } from '@angular/core';
import { AssetTrackerService } from './asset-tracker.service';
import { EmployeeLocationModel } from './employee-location.model';

import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-asset-tracker',
  templateUrl: './asset-tracker.component.html',
  styleUrls: ['./asset-tracker.component.css']
})
export class AssetTrackerComponent {

  public assetLocations: EmployeeLocationModel[];
  public observer;

  constructor(private svc: AssetTrackerService) { }

  ngOnInit() {
    this.observer = Rx.Observable.interval(1000)
      .exhaustMap(() => this.svc.getAssetLocations())
      .startWith(0)
      .subscribe(x => this.assetLocations = x)
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }
}
