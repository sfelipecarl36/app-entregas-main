import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 
{ apiKey: "AIzaSyAOt2dCmi0sSiJk4p-Txpt4EWlwHnJ0JNk",
    authDomain: "burger-tech.firebaseapp.com",
    projectId: "burger-tech",
    storageBucket: "burger-tech.appspot.com",
    messagingSenderId: "46662414707",
    appId: "1:46662414707:web:c973148b92c107bb7bd506" }
     */