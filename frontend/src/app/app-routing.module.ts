import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RequestPasswordResetComponent } from './component/password/request-password-reset/request-password-reset.component';
import { ResponsePasswordResetComponent } from './component/password/response-password-reset/response-password-reset.component';

const appRoutes:Routes = [ 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'request-password-reset',
    component: RequestPasswordResetComponent
  },
  {
    path: 'response-password-reset',
    component: ResponsePasswordResetComponent
  }
];


@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
