const express = require("express")
const route = express.Router();
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware")
const usersController = require("../controller/users")

route.route("/signUp").get(usersController.renderSignupForm)
.post(wrapasync(usersController.signUp));

route.route("/login").get(usersController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login' , failureFlash:true}), usersController.postLogin);

route.get("/logout" , usersController.logout)

module.exports = route;