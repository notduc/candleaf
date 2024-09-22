const headerButton = document.querySelector(".header-button");
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    var uid = user.uid;
    if (uid) {
      signIn.style.display = "none";
      signUp.style.display = "none";
    }
  } else {
    logOut.style.display = "none";
  }
});
logOut.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      signIn.style.display = "block";
      signUp.style.display = "block";
      logOut.style.display = "none";
    })
    .catch((error) => {});
});
