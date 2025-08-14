// dashboard.js

// Show logged-in user
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("loggedInUser");
    if (!username) {
        window.location.href = "login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(u => u.username === username);
    const welcomeMsg = document.getElementById("welcomeMsg");

    if (welcomeMsg) {
        welcomeMsg.textContent = `Welcome, ${currentUser?.fullname || username}!`;
    }

    // Set initial stats (example placeholders)
    document.getElementById("calories").textContent = "0 kcal";
    document.getElementById("protein").textContent = "0 g";
    document.getElementById("workouts").textContent = "0";
    document.getElementById("water").textContent = "2 L"; // Example
});

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Food Log functionality
const foodForm = document.getElementById("foodForm");
const foodList = document.getElementById("foodList");

if (foodForm) {
    foodForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const item = document.getElementById("foodItem").value.trim();
        const quantity = document.getElementById("quantity").value.trim();

        if (item && quantity) {
            const li = document.createElement("li");
            li.textContent = `${item} - ${quantity}g`;
            foodList.appendChild(li);
            foodForm.reset();
        }
    });
}

// AI Chat placeholder
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const msg = document.getElementById("userMessage").value.trim();
        if (msg) {
            const p = document.createElement("p");
            p.innerHTML = `<strong>You:</strong> ${msg}`;
            chatBox.appendChild(p);

            const reply = document.createElement("p");
            reply.innerHTML = `<strong>Coach:</strong> This is a placeholder reply.`;
            chatBox.appendChild(reply);

            chatBox.scrollTop = chatBox.scrollHeight;
            chatForm.reset();
        }
    });
}
