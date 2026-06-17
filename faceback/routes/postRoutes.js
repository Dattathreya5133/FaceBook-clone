import express from "express";
import { createPost,getPosts,updatePost,deletePost,dashboard} from "../controllers/postController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/create",authMiddleware,createPost);
router.get("/",getPosts);
router.put("/update/:id",authMiddleware,updatePost);
router.delete("/delete/:id",authMiddleware,deletePost)
router.get("/dashboard",authMiddleware,dashboard)

export default router