import express from 'express';
import mongoose from 'mongoose';
import bp from 'body-parser';
import Balon from '../models/Car.mjs';
import cors from 'cors';
import Cars from '../models/Cars.mjs';
import serverless from 'serverless-http'
const app = express();
app.use(cors())
app.use(express.json())
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
const PORT = 8088;




 
// database connection
const dbURI = 'mongodb+srv://englishlearning362:1111@cluster0.4dz3let.mongodb.net/node_auth?retryWrites=true&w=majority';
mongoose.connect(dbURI)



  // POSTMAN
  app.get('/', async (req, res) => {
    // Fetch all todos from MongoDB using Mongoose
    Balon.find()
    .then(balon => res.json(balon))
    .catch(err => res.json(err))
  });
 app.get('/matiz' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Matiz Akumulyator" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 })
 app.get('/nexia' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Nexia Akumulyator" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 })
 app.get('/spark' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Spark Akumulyator" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/spark_balon' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Spark Balon " } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/spark_bamper' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Spark Bamper" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/spark_fara' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Spark fara" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/matiz_fara' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Matiz Fara" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/matiz_bamper' , (req,res) => {
  Balon.aggregate([{ $match : { type : "Matiz Bamper" } }])
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
 });
 app.get('/cars', async (req, res) => {
  // Fetch all todos from MongoDB using Mongoose
  Cars.find()
  .then(balon => res.json(balon))
  .catch(err => res.json(err))
});
  
  app.listen(PORT,() => {
    console.log("serve is running")
  })
  

export const handler = serverless(app)

