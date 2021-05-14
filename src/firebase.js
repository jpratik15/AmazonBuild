// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAxoq4JNAzRPVHb_NqXqwCg4zOVKu_4kSM",
    authDomain: "build-bedd9.firebaseapp.com",
    projectId: "build-bedd9",
    storageBucket: "build-bedd9.appspot.com",
    messagingSenderId: "318295483921",
    appId: "1:318295483921:web:7ab428a3a259e5aa96f3b0",
    measurementId: "G-EPPP604FRY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db,auth};