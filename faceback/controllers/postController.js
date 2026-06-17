import Post from '../models/post.js'
import Users from '../models/user.js'

export const createPost = 
async(req,res)=>{
    try{
        const {text}=req.body;

        const post = await Post.create({
            user:req.user.id,
            text
        })
        res.status(201).json({
            message:"Post Created",
            post
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}

export const getPosts = async (req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json({
            message:"All Posts",
            posts
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        })
     }
}



export const updatePost = async(req,res)=>{
    try{
        const{id}=req.params;
        const{text}=req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {text},
            {new: true}
        );
        res.status(200).json({
            message:"Post Updated",
            updatedPost
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const deletePost = async (req,res)=>{
    try{
        const{id}=req.params;

        const deletedPost = await 
        Post.findByIdAndDelete(id);
        
        res.status(200).json({
            message:"Post Deleted",
            deletedPost
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

export const dashboard  = async (req,res)=>{
    try{

        const user = await 
        Users.findById(req.user.id).select("-password");

        const posts = await Post.find({user:req.user.id});

        res.status(200).json({
            message:"Dashboard Data",
            user,
            totalPosts:posts.length,
            posts       
        });
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}