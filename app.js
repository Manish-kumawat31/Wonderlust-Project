if (process.env.NODE_ENV !="production") {
  require('dotenv').config()
}
const express = require("express")
const app = express();
const port = 2020;
const mongoose = require('mongoose');
const listingsRoute = require("./routes/listings")
const ReviewsRoute = require("./routes/review")
const userRoute = require("./routes/user")
const path = require("path")
const engine = require('ejs-mate');
const methodOverride = require('method-override');
const expressError = require('./utils/expressError');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport =require("passport");
const LocalStrategy = require("passport-local");
const User = require('./models/user');
const user = require("./models/user");


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let store = MongoStore.create({
  mongoUrl:process.env.ATLAS_DB,
  ttl: 14 * 24 * 60 * 60,
  touchAfter:60*60*24,
  crypto: {
    secret: process.env.SECRET
  },
})

store.on("error" , ()=>{
  console.log("Error in MONGO-Store: " , err);
  
})
  app.use(session({
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: false,  // Change to false for development
      expires: Date.now() + 72460601000, // 1 week
      maxAge: 72460601000,
      httpOnly: true
    }
  }));
  app.use(flash());
  
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
  


main().then((res) => {
    console.log(`Connection successful With DB`);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.ATLAS_DB);
}

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
  });


app.get("/user" ,async (req,res)=>{
    let fakeUser =await new User({
      email: 'user@gmail.com',
      username:'delta-123'
    })
    let newUser = await User.register(fakeUser,"1234")
    res.send(newUser);
})

//listings route
app.use("/listings",listingsRoute)

//reviews route
app.use("/listings/:id/review",ReviewsRoute)

//signUp
app.use("/", userRoute)


app.all("*", (req, res, next) => {
    throw new expressError(404, "Page Not Found!")
})

// Error middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Some error ocurr" } = err;
    res.status(statusCode).render("./listings/error.ejs",{err})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})