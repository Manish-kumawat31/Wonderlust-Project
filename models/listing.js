const mongoose = require('mongoose');
const Review = require("./Review");
const { ref } = require('joi');

let listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        filename: {
            type: String,
        },
        url: {
            type: String,
            default:"https://www.imagella.com/cdn/shop/products/f127e6d3aa64ab27ec9135c0960562a9.jpg?v=1692436786"
        },
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review",
    },],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
});


listingSchema.post("findOneAndDelete",async (listing)=>{
    if (listing) {
        await Review.deleteMany({ _id : {$in : listing.reviews}});
    }
})

let Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;