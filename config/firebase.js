import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  APIDOMAIN: process.env.APIDOMAIN,
  APIKEY: 'AIzaSyCU9EtS50VDjMmwXRYnf3gwObcbXc0WeQ4',
  AUTHDOMAIN: 'dufry-map.firebaseapp.com',
  PROJECTID: 'dufry-map',
  STORAGEBUCKET: 'dufry-map.appspot.com',
  MESSAGINGSENDERID: '361231889253',
  APPID: '1:361231889253:web:efecf4911a84ee151ea78c',
  MEASUREMENTID: 'G-L20H43MHNE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);
