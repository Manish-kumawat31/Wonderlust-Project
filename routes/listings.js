if (process.env.NODE_ENV !="production") {
    require('dotenv').config()
  }
const express = require("express")
const route = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapasync')
const Listing = require("../models/listing")
const {isLoggedIn , isOwner , validateSchema} = require("../middleware")
const listingController = require("../controller/listings")
const multer  = require('multer')
const {storage, cloudinary} = require("../cloudConfig");
const upload = multer({ storage })

route.route("/").get(wrapAsync(listingController.allListings))
.post(isLoggedIn, upload.single('image') , validateSchema, wrapAsync(listingController.postAddNew));

//add new listing
route.get("/new", isLoggedIn, listingController.renderNewForm)

route.route("/:id").get(wrapAsync(listingController.viewListing))
.put(isLoggedIn,isOwner,  upload.single('image'), validateSchema, wrapAsync(listingController.putEdit))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));



//edit 
route.get("/:id/edit", isLoggedIn ,isOwner, wrapAsync(listingController.renderEditForm));

module.exports = route;