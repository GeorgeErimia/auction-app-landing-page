console.log("script is active!");

// Mock the sign in button for testing purposes
let signInButton = document.querySelector("#btn-sign-in");
if (signInButton !== null) {
  signInButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "./home-page.html";
  });
}

// Mock the register button as well
let registerButton = document.querySelector("#btn-create-account");
if (registerButton !== null) {
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location = "./home-page.html";
  });
}

// Add hover effect to category lists
let categories = document.querySelectorAll(".category");
