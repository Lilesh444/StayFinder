const express=require('express')
const router=express.Router()
// const wrapAsync=requiree('./utilities/wrapAsync.js')
const {listingSchema}=require("../schema.js")
const customError=require("../utilities/customError.js")
const Listing=require("../models/listing.js")

const validateListing=(req,res,next)=>{
    const { error } = listingSchema.validate(req.body);
      if (error) {
        throw new customError(400,error)
        }else{
            next()
        }
}

router.get('/',async(req,res)=>{
    const allListings=await Listing.find({})
    res.render('listings/index.ejs',{allListings})
})

router.get('/new',(req,res)=>{
    res.render('listings/new.ejs')
})

router.get('/:id',async(req,res)=>{
    let id=req.params.id
    const listing=await Listing.findById(id).populate("reviews")
    res.render('listings/show.ejs',{listing}) 
})

router.post('/new',validateListing, async (req, res,next) => {
    let { title, description, image, price, location, country } = req.body;
    
    try {
        let newListing = await Listing.create({
        title,
        description,
        image,
        price,
        location,
        country
    });
    console.log(newListing)
    res.redirect('/listing');
    } catch (error) {
        next(error)
    }
});
router.get('/:id/edit',async(req,res)=>{
    let id=req.params.id
    try {
        let listing=await Listing.findById(id)
    res.render('listings/edit.ejs',{listing})
    } catch (error) {
        next(error)
    }
})

router.put('/:id/edit',validateListing,async (req,res,next)=>{
    let id=req.params.id
    let {title, description, image, price, location, country}=req.body
    try {
        await Listing.findByIdAndUpdate(
        id,
        {title, description, image, price, location, country},
        {new:true}
    )
    console.log("Updated")
    res.redirect(`/listing/${id}`)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id/delete',async (req,res,next)=>{
    let id=req.params.id
    try {
        const deletedList=await Listing.findByIdAndDelete(id)
    console.log(deletedList);
    return res.redirect('/listing')
    } catch (error) {
        next(error)
    }
})
module.exports=router;