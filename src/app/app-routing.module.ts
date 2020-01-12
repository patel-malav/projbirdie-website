import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AccountComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'register',
    component: AccountComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
