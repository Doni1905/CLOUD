
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector("form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (email === "admin@example.com" && password === "admin123") {
        alert("Login successful!");
    
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  }
});
