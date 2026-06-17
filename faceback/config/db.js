import mongoose from "mongoose";
// import { MongoClient } from "mongodb";
// import dotenv from 'dotenv';
// dotenv.config()

const url = "mongodb://RamaKrishna:123321@ac-vedxjb4-shard-00-00.ul41zty.mongodb.net:27017,ac-vedxjb4-shard-00-01.ul41zty.mongodb.net:27017,ac-vedxjb4-shard-00-02.ul41zty.mongodb.net:27017/?ssl=true&replicaSet=atlas-12ef7q-shard-0&authSource=admin&appName=ToDo-MERN";
// const client = new MongoClient(url);
// const dbName ="facebook-clone";
// const collectionName = "facebook";

const connection = async()=>{
   try{
   //   await client.connect()
   //  const db = client.db(dbName)
   //  const collection = db.collection(collectionName)
   await mongoose.connect(url,{
      dbName:"facebook-clone"
   });
    console.log("MongoDB CONNECTED")
   }
   catch(error){
    console.error("Mongo error",error);
   }

}

export default connection


