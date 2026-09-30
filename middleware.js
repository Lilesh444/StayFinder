const Listing=require('./models/listing')
const Review=require('./models/review')

module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.user) // this line will a val if loged in else undefined and will b used
                          // for showing signup/login/logout
    if(!req.isAuthenticated()){
        // post login page means kis route jana tha usi pe vejo after login
        req.session.redirectURL=req.originalUrl
        req.flash('error','plz login to add a listing')
        return res.redirect('/users/login')
    }
    next()
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectURL){
        res.locals.redirectUrl=req.session.redirectURL
    }
    next()
}

// middleware to check is the og user trying to do something or other person
module.exports.isOwner=async(req,res,next)=>{
    let id=req.params.id
    let listing=await Listing.findById(id)
            if(!listing.owner.equals(res.locals.user._id)){
                req.flash('error',"You have no permission to edit this, Edit your own Listing")
                return res.redirect(`/listing/${id}`)
            }
            next()
}
// middleware to check is the og review author doing something or someone else
    module.exports.isReviewAuthor=async(req,res,next)=>{
        let {id,reviewId}=req.params
    let review=await Review.findById(reviewId)
            if(!review.author.equals(res.locals.user._id)){
                req.flash('error',"You have no permission to edit this, Edit your own review")
                return res.redirect(`/listing/${id}`)
            }
            next()
    }