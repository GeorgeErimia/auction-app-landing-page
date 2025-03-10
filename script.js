console.log("script is active!");

// Mock the sign in button for testing purposes
let signInButton = document.querySelector("#btn-sign-in");
signInButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "./home-page.html";
});
