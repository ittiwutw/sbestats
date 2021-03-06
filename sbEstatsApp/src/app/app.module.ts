import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { ModalPageModule } from './modal/modal.module';
import { AgmCoreModule } from '@agm/core';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7m7TrMDPUMmRgFIEIwoOgJZ5q_KIYeFc'
    }),
    ModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Geolocation,
    Camera,
    // Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
