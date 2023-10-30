import express from "express"
import collection from "./mongo.mjs"
import cors from 'cors'
import ServerlessHttp from "serverless-http"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{
    res.send("Welcome")
})

app.get('/todo', async (req, res) => {
    // Fetch all todos from MongoDB using Mongoose
    
    try {
      const todos = await collection.find();
     
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get todos' });
    }
  });
app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password,userName,location}=req.body

    const data={
        email:email,
        password:password,
        userName:userName,
        location:location
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8888,()=>{
    console.log("port connected");
})
export const handler = ServerlessHttp(app)

