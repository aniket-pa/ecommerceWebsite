import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCallback } from 'react';

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

  export const createUserProfileDocument = async (userAuth,additionalPar) =>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShotUser = await userRef.get()
    //console.log(snapShotUser.exists);
    const {email , displayName, uid  } = userAuth;
    const userCreatedAt= new Date()
    if(!snapShotUser.exists){

      try{
        await userRef.set({
          email,
          displayName,
          uid,
          userCreatedAt,
          ...additionalPar
        })
      }
      catch(err){
          console.log(err)
      }
     
    }

    return userRef

  }

  export default firebase;