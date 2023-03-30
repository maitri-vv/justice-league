const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    name :{
        type:String,
        required : true 
    },
    email :{
        type:String,
        unique:true ,
        required : true 
    },
    complain:{
        type:String,
        min:3,
        required : true 
    }
},
{timestamps:true})

module.exports = mongoose.model('newsletter',newsletterSchema);