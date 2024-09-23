const mongoose = require('mongoose');
const Listing = require("../models/listing")
const initListing = require("./data")


main().then((res)=>{
    console.log(`Connection successful With DB`);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
}


let initialData = async()=>{
   await Listing.deleteMany({});
    let data = initListing.data.map((obj)=>{
    obj.owner = "66dd996465f9c1f7b416bf26";
   });
   await Listing.insertMany(initListing.data)
   console.log("done");
}

initialData();