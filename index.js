const express = require("express");
const app = express();

const PORT = 8000;

// Middleware to ensure JSON responses
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// Me endpoint
app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Olowookere Damilola",
    email: "Mosesajayi458@gmail.com",
    github: "https://github.com/mosesajayi458-pixel"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
