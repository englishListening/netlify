import express from 'express';
import bp from 'body-parser';
import serverless from "serverless-http"
const PORT = 8888;
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());


app.get('/',(req,res) =>{
  res.send("Welcome")
})
 
app.get('/todo', (req,res) => {
  res.json({
    "name":"nxansxakl",
    "hobby":"football",
    "work":"student"
  })
})

export const handler = serverless(app)

