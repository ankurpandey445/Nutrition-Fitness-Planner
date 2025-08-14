// register.js

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullname = document.getElementById("fullname")?.value.trim() || "";
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !email || !password) {
            alert("Please fill in all required fields.");
            return;
        }

        // Get existing users from localStorage or create empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username already exists
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert("Username already taken. Choose another one.");
            return;
        }

        // Add new user
        users.push({ fullname, username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please login.");
        window.location.href = "login.html"; // Redirect to login page
    });
});
