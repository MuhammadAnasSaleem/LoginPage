import { auth, signInWithEmailAndPassword } from "./firebase.js";

//
const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    // firebase se login karne ka function
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("done");
    // login hoty hi dashboard ka page show karaya hy idher
    console.log("result ", result);
    window.location = "/Pages/dashboard.html";
  } catch (error) {
    console.log("finish");

    console.log("my error msg", error.message);
    swal("Error", error.message, "error");
  }
});
