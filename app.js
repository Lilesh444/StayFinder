const express=require('express')
const app=express()
const methodOverride = require('method-override');
const mongoose=require('mongoose')
const path=require('path')
const Listing = require('./models/listing')
const Review=require('./models/review.js')
const ejsMate=require('ejs-mate')
// const wrapAsync=requiree('./utilities/wrapAsync.js')
const customError=require("./utilities/customError.js")
const {listingSchema,reviewSchema}=require("./schema.js")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate)



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
main()
.then(()=>{console.log('Connected to DB');
})
.catch(err => console.log(err));

const validateListing=(req,res,next)=>{
    const { error } = listingSchema.validate(req.body);
      if (error) {
        throw new customError(400,error)
        }else{
            next()
        }
}
const validateReview=(req,res,next)=>{
    const {error}=reviewSchema.validate(req.body)
    if(error){
        throw new customError(400,error)
    }else{
        next()
    }
}

app.get('/',(req,res)=>{
    // res.send('Hello there, Mr. Root, Welcome to Stayfinder')
    res.render('listings/home.ejs')
})
app.get('/listing',async(req,res)=>{
    const allListings=await Listing.find({})
    res.render('listings/index.ejs',{allListings})
})

app.get('/listing/new',(req,res)=>{
    res.render('listings/new.ejs')
})

app.get('/listing/:id',async(req,res)=>{
    let id=req.params.id
    const listing=await Listing.findById(id).populate("reviews")
    res.render('listings/show.ejs',{listing}) 
})

app.post('/listing/new',validateListing, async (req, res,next) => {
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
app.get('/listing/:id/edit',async(req,res)=>{
    let id=req.params.id
    try {
        let listing=await Listing.findById(id)
    res.render('listings/edit.ejs',{listing})
    } catch (error) {
        next(error)
    }
})

app.put('/listing/:id/edit',validateListing,async (req,res,next)=>{
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

app.delete('/listing/:id/delete',async (req,res,next)=>{
    let id=req.params.id
    try {
        const deletedList=await Listing.findByIdAndDelete(id)
    console.log(deletedList);
    return res.redirect('/listing')
    } catch (error) {
        next(error)
    }
})

// add Reviews
app.post('/listing/:id/newreview',validateReview,async(req,res,next)=>{
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
        next(err)
    }
})
// delete review
app.delete('/listing/:id/reviews/:reviewId',async(req,res,next)=>{
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

app.all("/{*splat}",(req,res,next)=>{
    next(new customError(404,"Page Not Found !!!"))
})

app.use((err,req,res,next)=>{
    let {statusCode=500,message="something Went Wrong!!!"}=err
    res.render('listings/error.ejs',{statusCode,message})
    // res.status(statusCode).send(message)
})

// app.get('/testListing',async(req,res)=>{
//     let sampleListing=new listing({
//         title:"My new villa",
//         description:'into the mountain',
//         price:1200, 
//         location:'Deomali, Odisha',
//         country:'India'
//     })
//     await sampleListing.save()
//     console.log("sample was saved");
//     res.send("successfull")
// })

app.listen(3000,()=>{
    console.log('server is running on 3000');
})