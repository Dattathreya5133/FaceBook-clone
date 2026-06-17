import express from "express";
import { signup,login } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/signup",signup)
router.post("/login",login);
router.get("/profile",authMiddleware,(req,res)=>{
    res.status(200).json({
        message:"Protected Route Accessed",
        user:req.user
    })
})

export default router;