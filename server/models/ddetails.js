const mongoose = require("mongoose")

const DdetailsSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true,
    },
    firstName:String,
    lastName:String,
    gender:String,
    address:String,
    email:String,
    telephone:String,
    status:String,
    userType:String,
    userName:String,
    isDisplayed:{
        type:Boolean,
        default:true,
    },
})
const ModelDdetails = mongoose.model("Ddetails",DdetailsSchema)
module.exports  = ModelDdetails