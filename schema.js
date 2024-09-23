const joi = require('joi');
module.exports.listingSchema = joi.object({
    title: joi.string().required(),
    description:joi.string().required(),
    image:joi.string().allow("",null),
    price:joi.string().required(),
    country:joi.string().required(),
    location:joi.string().required()
})

// const Joi = require("joi");
// module.exports.listingSchema=Joi.object({
//     listing:Joi.object({
//         title:Joi.string().required(),
//         description:Joi.string().required(),
//         image:Joi.string().allow("",null),
//         price:Joi.number().min(1).required(),
//         location:Joi.string().required(),
//         country:Joi.string().required(),
//     })
// });

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating:joi.number().required().min(1).max(5),
        comments:joi.string().required()
    }).required()
});