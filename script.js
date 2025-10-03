// Handle login
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if (username === "" || password === "") {
    message.innerHTML = "<p class='text-danger'>⚠ Please fill in all fields.</p>";
  } else if (password.length < 6) {
    message.innerHTML = "<p class='text-warning'> Password must be at least 6 characters.</p>";
  } else {
    // Save session
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    message.innerHTML = "<p class='text-success'> Login successful! Redirecting...</p>";

    // Redirect after 2 sec
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 2000);
  }
});
