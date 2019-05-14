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
import {FirstpageComponent} from '../../components/main/firstpage/firstpage.component';
import {SecondpageComponent} from '../../components/main/secondpage/secondpage.component';
import {AdvertsixComponent} from '../../components/pages/advertsix/advertsix.component';
import {AdvertsevenComponent} from '../../components/pages/advertseven/advertseven.component';
import {AdverteightComponent} from '../../components/pages/adverteight/adverteight.component';
import {AdverttenComponent} from '../../components/pages/advertten/advertten.component';
import {AdvertnineComponent} from '../../components/pages/advertnine/advertnine.component';

// Include route guard in routes array
const routes: Routes = [
{ path: '', redirectTo: '/sign-in', pathMatch: 'full'},
{ path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'main', component: MainComponent, canActivate: [AuthGuard],
  children: [
    { path: 'first', component: FirstpageComponent},
    { path: 'second', component: SecondpageComponent}
  ]
},
{ path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
{ path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
{ path: 'advertone', component: AdvertoneComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'adverttwo', component: AdverttwoComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertthree', component: AdvertthreeComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertfour', component: AdvertfourComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertfive', component: AdvertfiveComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertsix', component: AdvertsixComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertseven', component: AdvertsevenComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'adverteight', component: AdverteightComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertnine', component: AdvertnineComponent, canActivate: [SecureInnerPagesGuard]},
{ path: 'advertten', component: AdverttenComponent, canActivate: [SecureInnerPagesGuard]}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
