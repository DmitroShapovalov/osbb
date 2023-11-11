import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {
  getFirestore,
  provideFirestore
} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"osbb-42912","appId":"1:666503050281:web:2bf8c108c5d44e3ef15838","databaseURL":"https://osbb-42912-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"osbb-42912.appspot.com","apiKey":"AIzaSyCKMey-uQt5aSF3bLfEg_mIYYczmq59dOA","authDomain":"osbb-42912.firebaseapp.com","messagingSenderId":"666503050281"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))
  ]
};
