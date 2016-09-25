import { Routes, RouterModule } from '@angular/router';
import { AssetTrackerComponent } from './asset-tracker/asset-tracker.component';
import { MetricsComponent } from './metrics/metrics.component';
import { IssuesComponent } from './issues/issues.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'assettracker',
    pathMatch: 'full'
  },
    {
    path: 'assettracker',
    component: AssetTrackerComponent
  },
    {
    path: 'metrics',
    component: MetricsComponent
  },
    {
    path: 'issues',
    component: IssuesComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);