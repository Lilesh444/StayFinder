const express=require('express')
const app=express()
const methodOverride = require('method-override');
const mongoose=require('mongoose')
const path=require('path')
const ejsMate=require('ejs-mate')
const customError=require("./utilities/customError.js")
const listingRoute=require("./routes/listingRoute.js")
const reviewRoute=require("./routes/reviewRoute.js")
const session=require('express-session')
const flash=require('connect-flash')
//unused after express Router
// const Listing = require('./models/listing')
// const Review=require('./models/review.js')
// const wrapAsync=requiree('./utilities/wrapAsync.js')
// const {listingSchema,reviewSchema}=require("./schema.js")


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'));
app.engine('ejs',ejsMate)

const sessionOptions={
    secret:"mysecretecode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000 ,
    //   from now after days hrs  mins secs milisecs
        maxAge:7*24 * 60 * 60 * 1000,
        httpOnly:true
    }
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
main()
.then(()=>{console.log('Connected to DB');
})
.catch(err => console.log(err));



app.use(session(sessionOptions))
app.use(flash())

// flash middleware
app.use((req, res, next) => {
    res.locals.success = req.flash("success")
    // console.log("SUCCESS:", res.locals.success)
    res.locals.error=req.flash('error')
    next()
})
app.get('/',(req,res)=>{
    // res.send('Hello there, Mr. Root, Welcome to Stayfinder')
    res.render('listings/home.ejs')
})

// all app.listing wala functionality replaced to listingroute file and used here with express router
app.use('/listing',listingRoute)

// all app.listing/review wala functionality replaced to reviewroute file and used here with express router
app.use('/listing/:id/reviews',reviewRoute)

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