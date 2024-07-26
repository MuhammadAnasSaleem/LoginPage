//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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
const auth = getAuth(app);

//firebase
const message = document.querySelector(".message");
const form = document.querySelector(".form");
form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("result", result);
    console.log("Sign Up Successfully");
    message.innerText = "Sign Up Successfully";
    message.classList.remove("red");
    message.classList.add("green");
    event.target.reset();
  } catch (error) {
    console.log("error ==>", error);
    console.log("Sign Up Failed");
    message.innerText = error.message;
    message.classList.remove("green");
    message.classList.add("red");
  }
});
