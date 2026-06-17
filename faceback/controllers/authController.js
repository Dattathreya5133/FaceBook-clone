import Users from "../models/user.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res)=>{
    try{
        const {name,age,email,password}=req.body;

        const existingUser = await Users.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"User Already exists"
            })
        }
        const user = await Users.create({
            name,age,email,password
        });
        res.status(201).json({
            message:"User created successfully",
            user
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
} 

export const login = async (req,res)=>{
    try{
        const{email,password}=req.body;
        console.log(req.body);
        console.log({email});
        const user =await Users.findOne({email});

        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        if(user.password !== password){
            return res.status(400).json({
                message:"Invalid Password"
            })
        }
        const token = jwt.sign(
            {id:user._id},
               "mysecretkey",
            {expiresIn:"7d"})
        res.status(200).json({
            message:"Login Successfull",
            user,
            token
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })    
    }

}