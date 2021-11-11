// node_modules
const express               =  require('express'),
      app                   =  express(),
      mongoose              =  require("mongoose"),
      passport              =  require("passport"),
      bodyParser            =  require("body-parser"),
      LocalStrategy         =  require("passport-local"),
      passportLocalMongoose =  require("passport-local-mongoose"),
      User                  =  require("./database");

// Setting Up node_modules


app.set("view engine", "ejs");

app.use(express.static("public"));
//Connecting database
mongoose.connect("mongodb://localhost/pdaregister");
//creating session
app.use(require("express-session")({
    secret:"Any normal Word",       //decode or encode session
    resave: false,          
    saveUninitialized:false    
}));
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session())

// Main Directory
app.get("/", function(req, res) {
    res.render("home");
});
app.get("/login", function(req,res) {
  res.sendFile(__dirname + "/views/login.html");
});
app.post("/", function(req, res) {
    res.redirect("/");
});
app.post("/login",passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect:"/login"
}),function (req, res){
});
app.post("/register", function(req, res) {
  
  var flag=0;
  var error =new Array();
  var name1=req.body['name'];
  var rollnumber=req.body['username'];
  var password=req.body['password'];
  var cpassword=req.body['cpass'];
  var email=req.body['email'];
  console.log(name1);
  // User.find({username:rollnumber}).count(function(err,val){
  //   if(err) console.log(err);
  //   console.log(val);
    
  //   if(val && !(password=="" || cpassword=="" || rollnumber==""|| email=="" || name1=="")){
      
  //     error.push("User already exits");
  //     flag=1;
  //     console.log(error);
      
      
  //   }
  //   if(rollnumber.length<8){
  //     error.push("Enter a valid rollnumber");
  //     flag=1;
  //   }
  //   var pt=/^[A-Za-z]+$/;
  //   if((!(name1.match(pt)))&&(name1.length!=0)){
  //     error.push("Enter a valid Name ");
  //     flag=1;
  //   }
  //   if(cpassword!=password){
  //     error.push("Passwords donot match");
  //     flag=1;
  //   }
  //   if(password=="" || cpassword=="" || rollnumber==""|| email=="" || name1==""){
  //     error.push("All details needs to be filed");
  //     flag=1;
  //   }
  //   console.log(error);
  //   if(flag==1){
  //     var art=Array('ball','bat');
  //     console.log(error.indexOf('hey man'));
  //     console.log(error);
  //     res.render("register.ejs",{array:error});
  //   } 
  //   else{
    
    User.register(new User({username: req.body.username,email:req.body.email,name: req.body.name}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("login");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/");
    })    
    })});
    // })});

app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect('/');
});
function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}


// Setting Up port on Localhost:3000
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});