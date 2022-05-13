// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMl37hl8UeIxvk2hAF_WNWM7NgGWjaTXw",
  authDomain: "the-coffee-house-f1530.firebaseapp.com",
  projectId: "the-coffee-house-f1530",
  storageBucket: "the-coffee-house-f1530.appspot.com",
  messagingSenderId: "25272494105",
  appId: "1:25272494105:web:975265cb6956634ff26288",
  measurementId: "G-K5BTWMP4QM",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app); //firestore is firebase's realtime database.
const auth = getAuth();

export { db, auth };
