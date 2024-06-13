import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import firebase from '@react-native-firebase/app';
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  APIDOMAIN: process.env.APIDOMAIN,
  APIKEY: 'AIzaSyDTUDAdYOzI9plYsNVnvocj2QqJwo0womM',
  AUTHDOMAIN: 'dufry-map.firebaseapp.com',
  PROJECTID: 'dufry-map',
  STORAGEBUCKET: 'dufry-map.appspot.com',
  MESSAGINGSENDERID: '361231889253',
  APPID: '1:361231889253:web:efecf4911a84ee151ea78c',
  measurementId: 'G-L20H43MHNE',
  databaseURL:
    'https://dufry-map-default-rtdb.asia-southeast1.firebasedatabase.app',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const firestore = getFirestore(FIREBASE_APP);
export const database = getDatabase(FIREBASE_APP);
