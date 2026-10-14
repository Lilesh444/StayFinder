const express=require('express')
const router=express.Router()
// const wrapAsync=requiree('./utilities/wrapAsync.js')
const {listingSchema}=require("../schema.js")
const customError=require("../utilities/customError.js")
// const Listing=require("../models/listing.js") // after MVC it will comented
const { isLoggedIn, isOwner } = require('../middleware.js')
const listingController=require('../controllers/listingController.js')
const multer  = require('multer')
const {cloudinary,storage}=require('../cloudConfig.js')
// const upload = multer({ dest: 'uploads/' })
const upload = multer({ storage })

const validateListing=(req,res,next)=>{
    const { error } = listingSchema.validate(req.body);
      if (error) {
        throw new customError(400,error)
        }else{
            next()
        }
}

router.get('/',listingController.index)

router.get('/new',isLoggedIn,listingController.renderNewForm)

router.get('/:id',listingController.getSpecificListing)

router.post('/new',isLoggedIn,validateListing,upload.single('image'), listingController.createNewListing);
// router.post('/new',upload.single('image'),(req,res)=>{
//   res.send(req.file)
//   console.log(req.body)
//   console.log(req.file)
// });

router.get('/:id/edit',isLoggedIn,isOwner,listingController.getEditform)

router.put('/:id/edit',isLoggedIn,isOwner,validateListing,listingController.putUpdatedData)

router.delete('/:id/delete',isLoggedIn,isOwner,listingController.deleteListing)
module.exports=router;