import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './components/dashboard/imap-dashboard/task/task.component';
import { InprocessQueueComponent } from './components/dashboard/imap-dashboard/inprocess-queue/inprocess-queue.component';
import { ImapPortalComponent } from './components/dashboard/imap-dashboard/imap-portal/imap-portal.component';
import { AccountComponent } from './components/dashboard/imap-dashboard/account/account.component';
import { UcidComponent } from './components/dashboard/imap-dashboard/ucid/ucid.component';
import { JbossJmxComponent } from './components/dashboard/imap-dashboard/jboss-jmx/jboss-jmx.component';
import {MaterialModule} from "./modules/material.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AffinityComponent } from './components/dashboard/affinity/affinity.component';
import { ImapDashboardComponent } from './components/dashboard/imap-dashboard/imap-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InprocessQueueComponent,
    ImapPortalComponent,
    AccountComponent,
    UcidComponent,
    JbossJmxComponent,
    DashboardComponent,
    AffinityComponent,
    ImapDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
