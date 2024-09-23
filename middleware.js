const Listing = require("./models/listing")
const Review = require("./models/Review")
const expressError = require('./utils/expressError');
const {listingSchema,reviewSchema} = require('./schema');



module.exports.isLoggedIn = (req,res,next)=>{
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error" , "You must be logged in!")
         return res.redirect("/login")
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if (req.session.redirectUrl) {
        res.locals.redirecturl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req,res,next)=>{
    let { id } = req.params;
    let list1 = await Listing.findById(id);
    if (!list1.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error" , "You are not Owner of this listing")
        return res.redirect(`/listings/${id}`)
    }
    next();
}
module.exports.isReviewAuthor = async (req,res,next)=>{
    let { id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error" , "You cannot delete this review")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.validateSchema = (req,res,next)=>{
    let data = req.body;
    let result = listingSchema.validate(data)
    if (result.error) {
        throw new expressError(400,result.error)
    }else{
        next();
    }
}

module.exports.validateReview = (req,res,next)=>{
    let data = req.body;
    let result = reviewSchema.validate(data)
    if (result.error) {
        throw new expressError(400,result.error)
    }else{
        next();
    }
}