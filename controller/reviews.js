const Listing = require("../models/listing")
const Review = require("../models/Review")

module.exports.creatReview = async (req,res)=>{
    let listing = await Listing.findById(req.params.id)
    let newReview =new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    console.log(newReview);
    
    await newReview.save();
    await listing.save();
    req.flash("success", "Review added!");
    res.redirect(`/listings/${listing._id}`)
}

module.exports.deleteReview = async (req,res,next)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Delted!");
    res.redirect(`/listings/${id}`);
}