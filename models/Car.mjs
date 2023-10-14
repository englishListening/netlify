import mongoose from "mongoose";
// import isEmail from "validator/lib/isEmail.js";


const balonSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    }
    },
    {
        timestamps: true
    }
)

const Balon  = mongoose.model('balon',balonSchema)

export default Balon