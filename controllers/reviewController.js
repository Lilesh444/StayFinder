const Review=require('../models/review')
const Listing=require('../models/listing')
module.exports.postNewReview=async(req,res,next)=>{
    try {
        let listing=await Listing.findById(req.params.id)
    let {comment,rating}=req.body
    let newReview=new Review({comment,rating})
    newReview.author=req.user._id
    await newReview.save()
     listing.reviews.push(newReview)
    await listing.save()
    console.log("new review saved")
    req.flash('success','New Review Created')
    res.redirect(`/listing/${listing._id}`)
    } catch (error) {
        next(error)
    }
}

module.exports.destroyReview=async(req,res,next)=>{
    try {
        let {id,reviewId}=req.params
    console.log(id,"",reviewId)
    //pehle review ko listing se hatao then review wale Db se hatana hai
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId) // this to remove the review from review wala DB only listing ke andar se nahi
    req.flash('success','Review Deleted')
    res.redirect(`/listing/${id}`)
    } catch (error) {
        next(new customError(400,"Bad Request"))
    }
}