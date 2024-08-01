import { auth, onAuthStateChanged } from "./firebase.js";

// firebase function to check if user is logged-in or not
onAuthStateChanged(auth, (user) => {
  const delay = 1000;

  if (user) {
    // User is signed in
    setTimeout(() => {
      window.location = "./Pages/dashboard.html";
      console.log("User is signed in, redirecting to dashboard.");
    }, delay);
  } else {
    // User is logged out
    setTimeout(() => {
      window.location = "./Pages/login.html";
      console.log("User is logged out, redirecting to login.");
    }, delay);
  }
});
