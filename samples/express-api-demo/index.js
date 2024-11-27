// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory data storage for Todos
let todos = [];
let nextId = 1;

// Routes

// Get all Todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Get a single Todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// Create a new Todo
app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }
  const newTodo = { id: nextId++, title, description, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a Todo by ID
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, description, completed } = req.body;
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a Todo by ID
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
