// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage  } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZjZXO8qkoFPWusAc38j36yr__ZFiHAo",
  authDomain: "qrdine-in-293b5.firebaseapp.com",
  projectId: "qrdine-in-293b5",
  storageBucket: "qrdine-in-293b5.appspot.com",
  messagingSenderId: "185795441364",
  appId: "1:185795441364:web:5c61a0c9749cbef90ec141",
  measurementId: "G-3J4VL7YDG6"
};

// Add the public key generated from the console here.

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const analytics = getAnalytics(app);


