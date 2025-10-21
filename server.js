const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// API endpoint
app.get("/api/info", (req, res) => {
  res.json({ message: "Welcome to Ramappa Lake Non-Veg App", status: "Running fine ✅" });
});

// Catch-all route for index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));