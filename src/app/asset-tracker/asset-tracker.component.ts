import { Component, OnInit } from '@angular/core';
import { AssetTrackerService } from './asset-tracker.service';
import { EmployeeLocationModel } from './employee-location.model';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-asset-tracker',
  templateUrl: './asset-tracker.component.html',
  styleUrls: ['./asset-tracker.component.css']
})
export class AssetTrackerComponent implements OnInit {

  public assetLocations: EmployeeLocationModel[];

  constructor(private svc: AssetTrackerService) {
    svc.getAssetLocations()
      .subscribe(x => {
        this.assetLocations = x
        console.log(this.assetLocations[1]);
        
      });
  }

  ngOnInit() {
  }

   public markers: marker[] = [
	  {
		  lat: 30.12303,
		  lng: 31.13571,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 55.24242,
		  lng: 72.92635,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 29.51066,
		  lng: 106.98577,
		  label: 'C',
		  draggable: true
	  },
    {
		  lat: 32.6227,
		  lng: 105.34494,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 39.93214,
		  lng: 48.36892,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 26.26663,
		  lng: 116.65897,
		  label: 'C',
		  draggable: true
	  },
    	  {
		  lat: -6.1628,
		  lng: 106.0611,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -9.47833,
		  lng: -35.85333,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: -41.28664,
		  lng: 174.77557,
		  label: 'C',
		  draggable: true
	  }
  ]

  lat: number = 51.678418;
  lng: number = 7.809007;
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
