import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { ReactivePolicyListComponent } from './reactive-policy-list/reactive-policy-list.component';

const routes: Routes = [
  { path:'', component:  PolicyListComponent},
  { path:'reactive', component: ReactivePolicyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PolicyListComponent, ReactivePolicyListComponent]