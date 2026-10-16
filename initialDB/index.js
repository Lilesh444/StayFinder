
const mongoose = require('mongoose');
const data = require('./data');
const Listing = require('../models/listing');
require('dotenv').config();

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({
    accessToken: process.env.MAPBOX_TOKEN
});

async function main() {
    await mongoose.connect(process.env.MONGO_ATLAS_URL)
    // await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
    console.log('Connected to DB');

    await Listing.deleteMany({});

    for (let obj of data.data) {
        const response = await geocodingClient.forwardGeocode({
            query: `${obj.location}, ${obj.country}`,
            limit: 1
        }).send();

        obj.geometry = response.body.features[0].geometry;
        obj.owner = '6ad1d9f725a3c1fb92b91b4f';
    }

    await Listing.insertMany(data.data);
    console.log('Data was initialized');
}

main()
    .catch(console.log)
    .finally(() => mongoose.connection.close());




// const mongoose=require('mongoose')
// const data=require('./data')
// const Listing=require('../models/listing')
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
// }
// main()
// .then(()=>{console.log('Connected to DB');
// })
// .catch(err => console.log(err));

// const initDB=async()=>{
//     await Listing.deleteMany({})
//     data.data=data.data.map((obj)=>({...obj,owner:'6abcce4ddbefc8aa0e4281ae'}))
//     await Listing.insertMany(data.data)
//     console.log("Data was initialized");   
// }

// initDB()