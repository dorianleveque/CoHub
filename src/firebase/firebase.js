import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyBgF75yX5kxny6updzimOKxiJAFGWreNic",
  authDomain: "cohub-9d62b.firebaseapp.com",
  databaseURL: "https://cohub-9d62b.firebaseio.com",
  projectId: "cohub-9d62b",
  storageBucket: "cohub-9d62b.appspot.com",
  messagingSenderId: "378294828987"
};

const devConfig = {
  apiKey: "AIzaSyBgF75yX5kxny6updzimOKxiJAFGWreNic",
  authDomain: "cohub-9d62b.firebaseapp.com",
  databaseURL: "https://cohub-9d62b.firebaseio.com",
  projectId: "cohub-9d62b",
  storageBucket: "cohub-9d62b.appspot.com",
  messagingSenderId: "378294828987"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
