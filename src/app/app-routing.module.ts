import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { ImapPortalComponent } from './components/imap-portal/imap-portal.component';
import { InprocessQueueComponent } from './components/inprocess-queue/inprocess-queue.component';
import { JbossJmxComponent } from './components/jboss-jmx/jboss-jmx.component';
import { TaskComponent } from './components/task/task.component';
import { UcidComponent } from './components/ucid/ucid.component';

const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'imap-portal', component: ImapPortalComponent },
  { path: 'in-process-queue', component: InprocessQueueComponent },
  { path: 'jboss-jmx', component: JbossJmxComponent },
  { path: 'task', component: TaskComponent },
  { path: 'ucid', component: UcidComponent },
  { path: '**', redirectTo: 'task', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
