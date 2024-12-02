const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory user storage
const users = {};

// Utility function for generating unique IDs (basic)
const generateId = () => Math.random().toString(36).substr(2, 9);

// Register a new user
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    if (users[username]) {
        return res.status(400).json({ error: "Username is already taken." });
    }

    const id = generateId();
    users[username] = { id, password };
    res.status(201).json({ message: "User registered successfully.", id });
});

// Get password for a user (for demo purposes, not recommended in production)
app.get("/user/:username", (req, res) => {
    const { username } = req.params;

    if (!users[username]) {
        return res.status(404).json({ error: "User not found." });
    }

    res.json({ username, password: users[username].password });
});

// Login with username and password
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    if (!users[username] || users[username].password !== password) {
        return res.status(401).json({ error: "Invalid username or password." });
    }

    res.json({ message: "Login successful.", id: users[username].id });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
