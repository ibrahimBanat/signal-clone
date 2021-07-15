import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbPZ0NiueOsLdYrIBJCifFr1JVIMdJik4',
  authDomain: 'sigbuild.firebaseapp.com',
  projectId: 'sigbuild',
  storageBucket: 'sigbuild.appspot.com',
  messagingSenderId: '528189123292',
  appId: '1:528189123292:web:d4e63dd0d02381a3162219',
};
// Initialize Firebase

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
