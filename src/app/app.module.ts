import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

//import { Transfer } from "../providers/file-transfer";
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FileTransfer,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor() {
    registerLocaleData(fr.default);
  }

}