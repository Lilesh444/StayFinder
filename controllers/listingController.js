const Listing=require('../models/listing')
module.exports.index=async(req,res)=>{
    const allListings=await Listing.find({})
    res.render('listings/index.ejs',{allListings})
}

module.exports.renderNewForm=(req,res)=>{
    res.render('listings/new.ejs')
}

module.exports.getSpecificListing=async(req,res)=>{
    let id=req.params.id
    const listing=await Listing.findById(id).
    populate({path:"reviews",populate:{path:'author'}}).
    populate('owner')
    if(!listing){
    req.flash('error','There is no such Listing')
    return res.redirect('/listing')
    }
    res.render('listings/show.ejs',{listing}) 
}
module.exports.createNewListing=async (req, res,next) => {
    // req.files gives info about the cloud filename and path
    let url=req.file.path
    let filename=req.file.filename
    let { title, description, image, price, location, country } = req.body;
    
    try {
        let newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    newListing.owner=req.user._id;
    newListing.image={url,filename}
    await newListing.save()
    req.flash('success','New Listing Created')
    console.log(newListing)
    res.redirect('/listing');
    } catch (error) {
        next(error)
    }
}

module.exports.getEditform=async(req,res)=>{
    let id=req.params.id
    try {
        let listing=await Listing.findById(id)
    res.render('listings/edit.ejs',{listing})
    } catch (error) {
        next(error)
    }
}
module.exports.putUpdatedData=async (req,res,next)=>{
    let id=req.params.id
    let {title, description, image, price, location, country}=req.body
    try {
        // the authorization code in middleware file
        let updatedListing=await Listing.findByIdAndUpdate(
        id,
        {title, description, image , price, location, country},
        {new:true}
    )
    if(typeof req.file != "undefined"){
        let url=req.file.path
    let filename=req.file.filename
    updatedListing.image={url,filename}
    await updatedListing.save()
    }
    console.log("Updated")
    res.redirect(`/listing/${id}`)
    } catch (error) {
        next(error)
    }
}
module.exports.deleteListing=async (req,res,next)=>{
    let id=req.params.id
    try {
        const deletedList=await Listing.findByIdAndDelete(id)
    console.log(deletedList);
    req.flash('success','Listing Deleted!')
    return res.redirect('/listing')
    } catch (error) {
        next(error)
    }
}