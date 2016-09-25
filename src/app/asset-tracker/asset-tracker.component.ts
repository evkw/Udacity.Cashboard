import { Component, OnInit } from '@angular/core';
import { AssetTrackerService } from './asset-tracker.service';
import { EmployeeLocationModel } from './employee-location.model';

@Component({
  selector: 'app-asset-tracker',
  templateUrl: './asset-tracker.component.html',
  styleUrls: ['./asset-tracker.component.css']
})
export class AssetTrackerComponent {

  public assetLocations: EmployeeLocationModel[];

  constructor(private svc: AssetTrackerService) {
    svc.getAssetLocations()
      .subscribe(x => this.assetLocations = x);
  }
}
