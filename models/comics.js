const mongoose = require('mongoose');

// Creating a mongoose schema to define how model of comic book will look like in the database
// Different attributes and conditions are set up inside schema
const comicSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    }, 
    author:{
        type:String,
        required:true,
        trim:true
    },
    published:{
        type: Number,
        required: true
    }, 
    price:{
        type: Number,
        required: true,
    }, 
    discount:{
        type: Number,
        required: true,
    },
    pages:{
        type: Number,
        required: true,
    },
    condition:{
        type:String,
        required:true,
        trim:true
    },
    isbn:{
        type: String,
        required: true,
        unique: true
    }
},
{timestamps: true}
);

// Creating database model according to defined schema
const comic = mongoose.model("comic", comicSchema);

module.exports = comic;