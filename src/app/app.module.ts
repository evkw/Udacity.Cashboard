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
import { AgmCoreModule } from 'angular2-google-maps/core'

import { AppComponent } from './app.component';
import { AssetTrackerComponent } from './asset-tracker/asset-tracker.component';
import { IssueAdminComponent } from './issue-admin/issue-admin.component';
import { IssuesComponent } from './issues/issues.component';
import { routing } from './app.routing';
import { AssetTrackerService } from './asset-tracker/asset-tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    AssetTrackerComponent,
    IssueAdminComponent,
    IssuesComponent,
    
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
    // Google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAneeLICbof-pPXZ5d861pBvuFoiuQQMqM'
    })
  ],
  providers: [AssetTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
