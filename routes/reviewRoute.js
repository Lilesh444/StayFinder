const express=require('express')
const router=express.Router({mergeParams:true})
// const wrapAsync=requiree('./utilities/wrapAsync.js')
const {listingSchema,reviewSchema}=require("../schema.js")
const customError=require("../utilities/customError.js")
// const Review=require("../models/review.js")
// const Listing=require("../models/listing.js")
const { isLoggedIn, isReviewAuthor } = require('../middleware.js')
const reviewController=require('../controllers/reviewController.js')


// server side validation with npm Joi
const validateReview=(req,res,next)=>{
    console.log("Body",req.body)
    const {error}=reviewSchema.validate(req.body)
    if(error){
         console.log("JOI ERROR:", error)
        throw new customError(400,error)
    }else{
        next()
    }
}
// add Reviews
router.post('/newreview',isLoggedIn,validateReview,reviewController.postNewReview)
// delete review
router.delete('/:reviewId',isLoggedIn,isReviewAuthor,reviewController.destroyReview)

module.exports=router