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

// About Directory
app.get("/about", function(req,res) {
  res.render("about");
});

// Setting Up port on Localhost:3000
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});