// TOGGLE BUTTON  - EXERCISE 1
// const toggleButton = document.querySelector(".toggle-button");
// const iconSquare = document.querySelector(".icon");

// // toggleButton.addEventListener("click", () => {
// //   iconSquare.classList.toggle("icon-red");
// // });

// //removeEventListener

// // setTimeout(() => {
// //   toggleButton.removeEventListener("click"); // nu functioneaza acest removeEventListener
// // }, 2000);

// const handleClick = () => {
//   iconSquare.classList.toggle("icon-red");
// };

// toggleButton.addEventListener("dblclick", handleClick);
// setTimeout(() => {
//   toggleButton.removeEventListener("click", handleClick);
// }, 5000);

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener -> documentatie pentru functia bind
// https://www.w3schools.com/tags/ref_eventattributes.asp

// SUBMIT FORM - EXERCISE 2

// const loginFormElement = document.getElementById("loginForm"); // querySelector('#loginForm')
// const handleLogin = (e) => {
//   e.preventDefault();
//   //   console.log(e);

//   const username = document.getElementById("username");
//   const password = document.getElementById("password");

//   if (username.value === "" || password.value === "") {
//     alert("Te rog sa verifici daca ai introdus valori in ambele input-uri!");
//   } else {
//     alert("Formularul a fost salvat cu succes si datele au fost trimise!");
//     console.log(
//       `Formularul a fost salvat cu succes si ${username.value} si ${password.value} au fost trimise!`
//     );
//   }

//   username.value = "";
//   password.value = "";
// };
// loginFormElement.addEventListener("submit", handleLogin);

// const registerFormElement = document.getElementById("registerForm");

// const handleRegister = (e) => {
//   e.preventDefault();
//   console.log(e);

//   const { elements } = e.target;
//   const username = elements["username-register"].value;
//   const password = elements["password-register"].value;

//   // lungimea username-ului > 15 -> eroare
//   // lungimea parolei < 6 -> eroare

//   // o functie care face ceva in caz de eroare -> markFormWithError
//   // o functie care face ceva in caz de succes -> handleSuccess

//   const registerErrors = document.querySelector(".form-errors");
//   const markFormWithError = (message) => {
//     if (!registerFormElement.classList.contains("error")) {
//       registerFormElement.classList.add("error");
//     }
//     registerErrors.textContent = message;
//   };

//   const handleSuccess = () => {
//     registerFormElement.classList.remove("error");
//     registerErrors.textContent = "";
//     console.log("The user is logged in");
//   };

//   // username.value === "" || password.value === ""
//   if (!username || !password) {
//     markFormWithError("Username-ul sau parola trebuie sa fie completate");
//   } else if (username.length > 15) {
//     markFormWithError("Username-ul nu poate fii mai mare de 15 caractere");
//   } else if (password.length < 6) {
//     markFormWithError("Parola nu poate fii mai mica de 6 caractere");
//   } else {
//     handleSuccess();
//   }
// };

// registerFormElement.addEventListener("submit", handleRegister);

// setTimeout(() => {
//   loginFormElement.removeEventListener("submit", handleLogin);
//   registerFormElement.removeEventListener("submit", handleRegister);
// }, 30000);

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener(
  "input",
  (e) => (nameOutput.innerHTML = e.target.value)
);

nameInput.addEventListener("focus", () => {
  console.log("focus");
});

nameInput.addEventListener("blur", () => {
  console.log("blur");
});

nameInput.addEventListener("click", () => {
  nameInput.focus();
  setTimeout(() => {
    nameInput.blur();
  }, 2000);
});
