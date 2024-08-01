import { auth, signInWithEmailAndPassword } from "./firebase.js";

//
const form = document.querySelector(".form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[1].value;
    const password = event.target.children[2].value;

    // firebase se login karne ka function
    const result = await signInWithEmailAndPassword(auth, email, password);

    // login hoty hi dashboard ka page show karaya hy idher
    window.location = "../dashboard.html";

    console.log("result ", result);
  } catch (error) {
    console.log("finish");

    console.log("my error msg", error.message);
  }
});
