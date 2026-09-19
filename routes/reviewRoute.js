const express=require('express')
const router=express.Router({mergeParams:true})
// const wrapAsync=requiree('./utilities/wrapAsync.js')
const {listingSchema,reviewSchema}=require("../schema.js")
const customError=require("../utilities/customError.js")
const Review=require("../models/review.js")
const Listing=require("../models/listing.js")


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
router.post('/newreview',validateReview,async(req,res,next)=>{
    try {
        let listing=await Listing.findById(req.params.id)
    let {comment,rating}=req.body
    let newReview=new Review({comment,rating})
    await newReview.save()
     listing.reviews.push(newReview)
    await listing.save()
    console.log("new review saved")
    res.redirect(`/listing/${listing._id}`)
    } catch (error) {
        next(error)
    }
})
// delete review
router.delete('/:reviewId',async(req,res,next)=>{
    try {
        let {id,reviewId}=req.params
    console.log(id,"",reviewId)
    //pehle review ko listing se hatao then review wale Db se hatana hai
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId) // this to remove the review from review wala DB only listing ke andar se nahi
    res.redirect(`/listing/${id}`)
    } catch (error) {
        next(new customError(400,"Bad Request"))
    }
})
module.exports=router