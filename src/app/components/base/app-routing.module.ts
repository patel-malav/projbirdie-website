import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountComponent } from '../account/account.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ContributeComponent } from '../contribute/contribute.component';
import { MylistComponent } from '../mylist/mylist.component';
import { ExploreComponent } from '../explore/explore.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'dashboard',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  },
  {
    path: 'mylist',
    component: MylistComponent
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
