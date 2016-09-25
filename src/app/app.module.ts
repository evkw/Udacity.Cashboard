import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdListModule } from '@angular2-material/list';
import { MdIconModule } from '@angular2-material/icon';
import { MdCardModule } from '@angular2-material/card';

import { AgmCoreModule } from 'angular2-google-maps/core'
import { ChartsModule } from 'ng2-charts/ng2-charts'
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { AssetTrackerComponent } from './asset-tracker/asset-tracker.component';
import { IssuesComponent } from './issues/issues.component';
import { routing } from './app.routing';
import { AssetTrackerService } from './asset-tracker/asset-tracker.service';
import { MetricsComponent } from './metrics/metrics.component';
import { UserCountComponent } from './user-count/user-count.component';
import { IssueCountComponent } from './issue-count/issue-count.component';
import { UserService } from './user-count/user.service';
import { IssueCountService } from './issue-count/issue-count.service';
import { IssuesOverTimeComponent } from './issues-over-time/issues-over-time.component';
import { IssuesOverTimeService } from './issues-over-time/issues-over-time.service';
import { IssueService } from './issues/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    AssetTrackerComponent,
    IssuesComponent,
    MetricsComponent,
    UserCountComponent,
    IssueCountComponent,
    IssuesOverTimeComponent,
  ],
  imports: [
    // Native modules
    BrowserModule,
    FormsModule,
    HttpModule,
    // Routing
    routing,
    // Material Design
    MdCoreModule,
    MdProgressCircleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    // Google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAneeLICbof-pPXZ5d861pBvuFoiuQQMqM'
    }),
    // ng2 Charts
    ChartsModule,
    // ng2 table
    Ng2TableModule,
    Ng2BootstrapModule
  ],
  providers:
  [
    AssetTrackerService,
    UserService,
    IssueCountService,
    IssuesOverTimeService,
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
