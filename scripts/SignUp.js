//firebase

// Import the functions you need from the SDKs you need

import { auth, createUserWithEmailAndPassword } from "./firebase.js";

//firebase

const form = document.querySelector(".form");
form.addEventListener("submit", async (event) => {
  try {
    event.target.lastElementChild.disabled = true;
    event.preventDefault();
    const email = event.target.children[1].value;
    const password = event.target.children[2].value;
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("result", result);
    console.log("Sign Up Successfully");
    window.location = "/Pages/dashboard.html";

    event.target.reset();
  } catch (error) {
    event.target.lastElementChild.disabled = false;
    console.log("error ==>", error);
    console.log("Sign Up Failed");
    swal("Error", error.message, "error");
  }
});
