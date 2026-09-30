const mongoose=require('mongoose')
const data=require('./data')
const Listing=require('../models/listing')
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}
main()
.then(()=>{console.log('Connected to DB');
})
.catch(err => console.log(err));

const initDB=async()=>{
    await Listing.deleteMany({})
    data.data=data.data.map((obj)=>({...obj,owner:'6abcce4ddbefc8aa0e4281ae'}))
    await Listing.insertMany(data.data)
    console.log("Data was initialized");   
}

initDB()