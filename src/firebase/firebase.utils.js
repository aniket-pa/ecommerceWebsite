import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAq6gULtCm6jZoA9y9sl-4SjFCzRk-VLoM",
    authDomain: "clothing-db-604ab.firebaseapp.com",
    projectId: "clothing-db-604ab",
    storageBucket: "clothing-db-604ab.appspot.com",
    messagingSenderId: "129939113108",
    appId: "1:129939113108:web:cf6184cec990212120e081",
    measurementId: "G-EQCMVRSL9W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt': 'select_account'})

  export const signInWithGoogle =() => auth.signInWithPopup(provider)

  export default firebase;