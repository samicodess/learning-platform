// src/scripts/app.js

document.addEventListener("DOMContentLoaded", () => {
  // Handle registration form submission
  document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (registerUser(username, email, password)) {
      alert("Registration successful! Please log in.");
      document.getElementById("register-form").reset();
    }
  });

  // Handle login form submission
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (loginUser(email, password)) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to dashboard
    }
  });
});
