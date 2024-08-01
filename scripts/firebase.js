// firebase ka sara kam idher hoga

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword, // signup
  signInWithEmailAndPassword, // login
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQ_hRU9E_6E71QN2zN0-A5Ojik4Lfj_g",
  authDomain: "fire-base--first.firebaseapp.com",
  projectId: "fire-base--first",
  storageBucket: "fire-base--first.appspot.com",
  messagingSenderId: "198638341438",
  appId: "1:198638341438:web:d4297f0dbef1fcc149b06f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// def of authentication
// the process or action of verifying the identity of a user or process.

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// export let testing = "shehzad"

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

// d/b signup & signin & login
