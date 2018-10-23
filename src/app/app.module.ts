import { AreaClientesPage } from './../pages/area-clientes/area-clientes';
import { ModalPage } from './../pages/modal/modal';
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';


// credenciales de Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBqV6WaG2DBv4mEdvL5AZOamA5HOL_8Ygs",
  authDomain: "q-conex-fuego.firebaseapp.com",
  databaseURL: "https://q-conex-fuego.firebaseio.com",
  projectId: "q-conex-fuego",
  storageBucket: "q-conex-fuego.appspot.com",
  messagingSenderId: "629939915754"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalPage,
    AreaClientesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AreaClientesPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
