import {ApplicationConfig, importProvidersFrom, InjectionToken} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {connectAuthEmulator, getAuth, provideAuth} from '@angular/fire/auth';
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
  initializeFirestore,
  provideFirestore
} from '@angular/fire/firestore';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {environment} from "../environments/environment";

const app = initializeApp(environment.firebase);

export const AUTH = new InjectionToken('Firebase auth', {
  providedIn: 'root',
  factory: () => {
    const auth = getAuth();
    if (environment.useEmulators) {
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      });
    }
    return auth;
  },
});

export const FIRESTORE = new InjectionToken('Firebase firestore', {
  providedIn: 'root',
  factory: () => {
    let firestore: Firestore;
    if (environment.useEmulators) {
      firestore = initializeFirestore(app, {});
      connectFirestoreEmulator(firestore, 'localhost', 8080);
    } else {
      firestore = getFirestore();
    }
    return firestore;
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    // importProvidersFrom(provideFirebaseApp(() => app)),
    // importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"osbb-42912","appId":"1:666503050281:web:2bf8c108c5d44e3ef15838","databaseURL":"https://osbb-42912-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"osbb-42912.appspot.com","apiKey":"AIzaSyCKMey-uQt5aSF3bLfEg_mIYYczmq59dOA","authDomain":"osbb-42912.firebaseapp.com","messagingSenderId":"666503050281"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))
  ]
};
