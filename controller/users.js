const User = require("../models/user");

module.exports.renderSignupForm = (req,res)=>{
    res.render("./user/signUp.ejs")
}

module.exports.signUp = async(req,res)=>{
    try{
    let {username , email ,password} = req.body;
    const newUser = new User({
        username , email
    })
    let registeredUser = await User.register( newUser ,password);
    console.log(registeredUser);
    req.login(registeredUser , (err)=>{
        if (err) {
            
            return next(err);
        }
        req.flash("success" , "Sign-up & login Sucessfully");
        res.redirect("/listings");
    })
} catch(e){
    req.flash("error" , e.message)
    res.redirect("/signUp")
}
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("./user/login.ejs")
}

module.exports.postLogin = async(req,res)=>{
    let redirect = res.locals.redirecturl || "/listings";
    req.flash("success" , "Welcome to Wonderlust!")
    res.redirect(redirect)
}

module.exports.logout = (req,res)=>{
    req.logOut((err)=>{
        if (err) {
            return next(err);
        }
        req.flash("success" , "Logged Out!");
        res.redirect("/listings");
    })
}