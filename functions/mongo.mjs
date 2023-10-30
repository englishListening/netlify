import mongoose from "mongoose"
import isEmail from "validator/lib/isEmail.js"
import bcrypt from 'bcrypt'

mongoose.connect("mongodb+srv://englishlearning362:kiritoEnglish@cluster0.4dz3let.mongodb.net/node_auth?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please Enter an Username"],
    },
    location:{
        type:String,
        required:[true,"Please Enter an location"],
    },
    email:{
        type:String,
        required:[true,"Please Enter an Email"],
        unique:true,
        lowercase:true,
        validate:[isEmail,"Please Enter a Valid Email"]

    },
    password: {
        type: String,
        required: [true ,"Please Enter a password"],
        minLength: [ 6 ,"Minimum password length is 6 characters"],
    }
})
userSchema.post("save" , (doc,next) => {
    console.log("New user created and saved" , doc),
    next()
});
 userSchema.pre("save" , async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
 })

 userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email})
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect email")
 }
  const collection = mongoose.model("users",userSchema)
export default collection

