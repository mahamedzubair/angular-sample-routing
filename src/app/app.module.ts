import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './components/task/task.component';
import { InprocessQueueComponent } from './components/inprocess-queue/inprocess-queue.component';
import { ImapPortalComponent } from './components/imap-portal/imap-portal.component';
import { AccountComponent } from './components/account/account.component';
import { UcidComponent } from './components/ucid/ucid.component';
import { JbossJmxComponent } from './components/jboss-jmx/jboss-jmx.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InprocessQueueComponent,
    ImapPortalComponent,
    AccountComponent,
    UcidComponent,
    JbossJmxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
