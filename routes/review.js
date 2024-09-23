const express = require("express")
const route = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapasync')
const {validateReview, isLoggedIn,isReviewAuthor} = require("../middleware")
const reviewController = require("../controller/reviews")


//post review
route.post("/",isLoggedIn, validateReview,wrapAsync (reviewController.creatReview));

//delete Review Route
route.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview))

module.exports = route;