import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from './shared/services/auth.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material.module';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdvertoneComponent } from './components/pages/advertone/advertone.component';
import { AdverttwoComponent } from './components/pages/adverttwo/adverttwo.component';
import { AdvertthreeComponent } from './components/pages/advertthree/advertthree.component';
import { AdvertfourComponent } from './components/pages/advertfour/advertfour.component';
import { AdvertfiveComponent } from './components/pages/advertfive/advertfive.component';
import {ToNextLevelDialogComponent, FirstpageComponent} from './components/main/firstpage/firstpage.component';
import { AdvertsixComponent } from './components/pages/advertsix/advertsix.component';
import { AdvertsevenComponent } from './components/pages/advertseven/advertseven.component';
import { AdverteightComponent } from './components/pages/adverteight/adverteight.component';
import { AdvertnineComponent } from './components/pages/advertnine/advertnine.component';
import { AdverttenComponent } from './components/pages/advertten/advertten.component';
import {
  BottomSheetMenuComponent,
  WinnerDialogComponent,
  MilfDialogComponent,
  SecondpageComponent
} from './components/main/secondpage/secondpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    SidenavListComponent,
    AdvertoneComponent,
    AdverttwoComponent,
    AdvertthreeComponent,
    AdvertfourComponent,
    AdvertfiveComponent,
    FirstpageComponent,
    SecondpageComponent,
    AdvertsixComponent,
    AdvertsevenComponent,
    AdverteightComponent,
    AdvertnineComponent,
    AdverttenComponent,
    ToNextLevelDialogComponent,
    WinnerDialogComponent,
    BottomSheetMenuComponent,
    MilfDialogComponent
  ],
  entryComponents: [ToNextLevelDialogComponent, WinnerDialogComponent, BottomSheetMenuComponent, MilfDialogComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
