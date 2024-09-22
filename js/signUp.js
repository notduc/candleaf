const togglePassword = document.querySelectorAll("#togglePassword");

togglePassword.forEach((password) => {
  password.addEventListener("click", () => {
    const input = password.previousElementSibling;
    if (password.className.includes("fa-eye-slash")) {
      input.type = "password";
      password.className = "fa-regular fa-eye toggle-password";
    } else {
      input.type = "text";
      password.className = "fa-regular fa-eye-slash toggle-password";
    }
  });
});

const accountSubmit = document.querySelector(".account-submit");
const inpEmail = document.querySelector("#email");
const inpPassword = document.querySelector("#password");
const inpCfPassword = document.querySelector("#cf-password");
const showError = document.querySelector(".show-error");
const showSuccess = document.querySelector(".show-success");
const loader = document.querySelector(".loader");
const textSubmit = document.querySelector(".text-submit");

accountSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = inpEmail.value;
  const password = inpPassword.value;
  const cfPassword = inpCfPassword.value;
  if (password === cfPassword) {
    loader.style.display = "inline-block";
    textSubmit.style.display = "none";
    accountSubmit.classList.add("loading");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);

        firebase
          .database()
          .ref("users/" + user.uid)
          .set({
            email: email,
            created_date: new Date().toString(), //Mục đích để xem giờ đăng ký
            updated_date: null, //Mục đích để kiểm tra giờ đăng nhập
          });

        showSuccess.style.visibility = "visible";
        setTimeout(() => {
          showSuccess.style.visibility = "hidden";
        }, 5000);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        showError.textContent = errorMessage;
        showError.style.visibility = "visible";
        setTimeout(() => {
          showError.style.visibility = "hidden";
        }, 5000);
      })
      .finally(() => {
        loader.style.display = "none";
        textSubmit.style.display = "block";
        accountSubmit.classList.remove("loading");
      });
  }
});
