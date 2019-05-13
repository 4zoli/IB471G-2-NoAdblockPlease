import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { MainComponent } from '../../components/main/main.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
// Import canActivate guard services
import { AuthGuard } from '../../shared/guard/auth.guard';
import { SecureInnerPagesGuard } from '../../shared/guard/secure-inner-pages.guard';
import {AdvertoneComponent} from '../../components/pages/advertone/advertone.component';
import {AdverttwoComponent} from '../../components/pages/adverttwo/adverttwo.component';
import {AdvertthreeComponent} from '../../components/pages/advertthree/advertthree.component';
import {AdvertfourComponent} from '../../components/pages/advertfour/advertfour.component';
import {AdvertfiveComponent} from '../../components/pages/advertfive/advertfive.component';

// Include route guard in routes array
const routes: Routes = [
{ path: '', redirectTo: '/sign-in', pathMatch: 'full'},
{ path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
{ path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'advertone', component: AdvertoneComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'adverttwo', component: AdverttwoComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'advertthree', component: AdvertthreeComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'advertfour', component: AdvertfourComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'advertfive', component: AdvertfiveComponent, canActivate: [SecureInnerPagesGuard]},


];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
