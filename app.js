const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./database"),
  flash = require("connect-flash"),
  dotenv = require("dotenv"),
  createSendMail = require("./mail");

dotenv.config({ path: "./config.env" });
app.set("view engine", "ejs");
app.use(express.static("public"));

let DataBase = process.env.DBCONNECTION;
const DataBasePass = process.env.DBPASSWORD;
DataBase = DataBase.replace("<password>", DataBasePass);
mongoose
  .connect(DataBase)
  .then((value) => {
    console.log(value);
    console.log("DataBase connected Successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error occured");
  });

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
app.get("/forgotpass", function (req, res) {
  res.render("forgotpass");
});
app.post("/", function (req, res) {
  //createSendMail(req.body.email);
  res.render("login");
});
app.post("/login", function (req, res, next) {
  const user = new User({
    username: req.body.username,
    passowrd: req.body.password,
  });
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      console.log(info);
      return next(err);
    }
    if (!user) {
      console.log(info);
      return res.render("login", { error: "Incorrect email or password" });
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      User.findOne({ username: user.username }, function (err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.render("user", { WelcomeMessage: "Welcome " + doc.name });
        }
      });
    });
  })(req, res, next);
});
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
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

/*404 page Error */
app.use(function (req, res, next) {
  res.render();
});
app.listen(process.env.PORT, function () {
  console.log("Server is running on port 3000.");
});
