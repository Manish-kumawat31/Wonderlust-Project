const { string, number, date } = require('joi');
const mongoose = require('mongoose');
const { min, max, type } = require('../schema');

let reviewSchema =new mongoose.Schema({
    comments:String,
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Review",reviewSchema)


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//     comment: String,
//     rating:{
//         type:Number,
//         min:1,
//         max:5
//     },
//     createdAt:{
//         type: Date,
//         default: Date.now()
//     },
//     author:{
//         type: Schema.Types.ObjectId,
//         ref: "User"
//     }
// });

// let Review = mongoose.model("Review",reviewSchema);
// module.exports = Review;