import mongoose, { now } from "mongoose";
// import isEmail from "validator/lib/isEmail.js";


const carsSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
    },
   
)

const Cars  = mongoose.model('cars',carsSchema)

export default Cars