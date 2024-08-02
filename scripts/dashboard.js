import { auth, signOut, onAuthStateChanged } from "./firebase.js";
const userEmailDiv = document.querySelector("#userEmail");
const logoutBtn = document.querySelector("#logout");
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(" user is signedin");
    userEmailDiv.innerText = user.email;
  } else {
    console.log("user is signedout");
    window.location = "/index.html";
  }
});
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    console.log("signed out succesfully");
  } catch (error) {
    console.log(error);
  }
});
