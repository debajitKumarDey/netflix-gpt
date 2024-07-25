// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyq2fPy__z_2CTPQnpDkCDW80EzsWxFhQ",
  authDomain: "netflixgpt-3a419.firebaseapp.com",
  projectId: "netflixgpt-3a419",
  storageBucket: "netflixgpt-3a419.appspot.com",
  messagingSenderId: "955893934125",
  appId: "1:955893934125:web:7ce6cd67e3b6beba2a30a4",
  measurementId: "G-ZZEH9WEX4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();