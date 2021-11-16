const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./database"),
  flash = require("connect-flash");

app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/pdaregister");

app.use(
  require("express-session")({
    secret: "Any normal Word",
    resave: false,
    saveUninitialized: false,
  })
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/", function (req, res) {
  res.redirect("/");
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);
app.post("/register", function (req, res) {
  var flag = 0;
  var error = new Array();
  var name1 = req.body["name"];
  var rollnumber = req.body["username"];
  var password = req.body["password"];
  var cpassword = req.body["cpass"];
  var email = req.body["email"];
  console.log(name1);
  User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
    }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);

        res.render("login", { error: "user already exists" });
      }
      passport.authenticate("local")(req, res, function () {
        res.render("login", { success: "Successfully registered a new user" });
      });
    }
  );
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/forgotpass", (req, res) => {
  res.render("forgot_pass");
});

app.get("/resetpass", (req, res) => {
  res.render("reset_pass");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
