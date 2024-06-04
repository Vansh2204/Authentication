const mongoose = require('mongoose');
const { type } = require('os');

const userschema = mongoose.Schema({
    username:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    token:{
        type:String,
        default:null
    },
})

const User = mongoose.model('User',userschema)
module.exports = User;