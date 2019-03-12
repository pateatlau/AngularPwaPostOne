import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IosInstallComponent } from './ios-install/ios-install.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IosInstallComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],

  providers: [],

  bootstrap: [AppComponent],

  entryComponents: [IosInstallComponent]
})

export class AppModule { }
