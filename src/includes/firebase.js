// Continue @ 11 -> 133
import firebase from "firebase/app";
import 'firebase/auth'; //don't need a name, firebase is smart enough to extend the core

const firebaseConfig = {
    apiKey: "AIzaSyC24I2Itc1CS1UNopFxTqupTLq8zD1HiQ0",
    authDomain: "product-listing-page-e4198.firebaseapp.com",
    projectId: "product-listing-page-e4198",
    storageBucket: "product-listing-page-e4198.appspot.com",
    appId: "1:46184442095:web:694fdc9425d90e0407131a"
  };
  
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);