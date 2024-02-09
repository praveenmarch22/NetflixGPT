// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Rl-SxTwjpZFwNkRTnIdNk2fgV1m6IPo",
  authDomain: "netflixgpt-90df4.firebaseapp.com",
  projectId: "netflixgpt-90df4",
  storageBucket: "netflixgpt-90df4.appspot.com",
  messagingSenderId: "714497821914",
  appId: "1:714497821914:web:435abde048e729145d69e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
