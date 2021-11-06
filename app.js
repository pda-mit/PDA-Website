// node_modules
const express = require("express");

// Setting Up node_modules
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

// Main Directory
app.get("/", function(req, res) {
    res.render("home");
});

app.post("/", function(req, res) {
    res.redirect("/");
});

// Login Directory
app.get("/login", function(req,res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", function(req,res) {
    res.sendFile(__dirname + "/login.html");
  });

// Setting Up port on Localhost:3000
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});