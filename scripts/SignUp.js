//firebase

// Import the functions you need from the SDKs you need

import { auth, createUserWithEmailAndPassword } from "./firebase.js";

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
