/* import firebase from "firebase/app";
import "firebase/firestore"; */

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuYpVy-VB2KnSaiCAquB7J79yGIyz9fws",
  authDomain: "tutti-7760e.firebaseapp.com",
  projectId: "tutti-7760e",
  storageBucket: "tutti-7760e.appspot.com",
  messagingSenderId: "81354805970",
  appId: "1:81354805970:web:dbf5dad27c4c8afffd930b",
  measurementId: "G-LSYWDV3KJJ",
};

firebase.initializeApp(firebaseConfig);

window.db = firebase.firestore();

/* const firebase = require("firebase");
require("firebase/firestore"); */
