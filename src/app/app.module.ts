import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuModule } from 'primeng/primeng';

import { AppComponent }  from './app.component';

@NgModule({
  imports:
  [
    BrowserModule,
    MenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }