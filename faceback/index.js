import express from "express";
import cors from "cors";
import connection from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
// import dotenv from 'dotenv'
// dotenv.config();

const app =express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/post",postRoutes);

app.get("/",(req,res)=>{
    console.log("HOME ROUTE HIT");
    res.send("working");
})

connection()

// const PORT = process.env.PORT || 3300;

app.listen(3300)
// (PORT,'0.0.0.0',()=>{
//     console.log(`SERVER RUNNING on port 3300 ${PORT}`)
// })