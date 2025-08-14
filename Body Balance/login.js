// login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Get stored users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Find matching user
        const foundUser = users.find(
            user => user.username === username && user.password === password
        );

        if (foundUser) {
            alert(`Welcome back, ${foundUser.fullname || foundUser.username}!`);
            localStorage.setItem("loggedInUser", username);
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password");
        }
    });
});
