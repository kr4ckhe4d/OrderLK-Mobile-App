import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashPage } from "../pages/splash/splash";
import { PostsplashPage } from "../pages/postsplash/postsplash";
import { ProfilePage } from "../pages/profile/profile";
import { StorePage } from "../pages/store/store";
import { LoginPage } from "../pages/login/login";
import { DealsPage } from "../pages/deals-page/deals-page";
import { CartPage } from "../pages/cart-page/cart-page";

import { AngularFireModule } from 'angularfire2';
import { RestService } from "../providers/rest-service";
import { HttpModule } from "@angular/http";

import { AngularFireAuthModule } from 'angularfire2/auth';
import { SignUpPage } from "../pages/sign-up-page/sign-up-page";


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD_5HUaYv3buIMBEzwR52K6bwDrHBe2LjI",
    authDomain: "mobile-platform-cpmad.firebaseapp.com",
    databaseURL: "https://mobile-platform-cpmad.firebaseio.com",
    projectId: "mobile-platform-cpmad",
    storageBucket: "mobile-platform-cpmad.appspot.com",
    messagingSenderId: "153676263445"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    PostsplashPage,
    ProfilePage,
    StorePage,
    LoginPage,
    TabsPage,
    DealsPage,
    CartPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    HomePage,
    PostsplashPage,
    ProfilePage,
    StorePage,
    LoginPage,
    TabsPage,
    DealsPage,
    CartPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
