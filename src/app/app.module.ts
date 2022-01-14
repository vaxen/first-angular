import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServersListComponent} from "./servers-list/servers-list.component";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {FormsModule} from "@angular/forms";
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent, ServersListComponent,WarningAlertComponent, SuccessAlertComponent, ServerComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
