const mongoose=require('mongoose')
const Review=require('../models/review')

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
        default:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        set:(v)=>v===""
        ?'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
        :v
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

// yahan jab listing delete hoga tho review delete cascading ka implementation 
listingSchema.post('findOneAndDelete',async(listing)=>{
    if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}})
    }
})
const Listing=mongoose.model("Listing",listingSchema)

module.exports=Listing