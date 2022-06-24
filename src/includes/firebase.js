/* Firestore info
- Bucket is the physical location where the data is stored.
- Collection is an object that makes you able to orgenize the data like a category.
- Documents are the data of a collection, like a doc user in the collection users.
*/
import firebase from "firebase/app";
import 'firebase/auth'; //don't need a name, firebase is smart enough to extend the core
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC24I2Itc1CS1UNopFxTqupTLq8zD1HiQ0",
    authDomain: "product-listing-page-e4198.firebaseapp.com",
    projectId: "product-listing-page-e4198",
    storageBucket: "product-listing-page-e4198.appspot.com",
    appId: "1:46184442095:web:694fdc9425d90e0407131a"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {
  auth,
  db,
};