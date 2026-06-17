import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users",
            required:true
        },
        text:{
            type:String,
            required:true,
            trim:true
        }
    },{
        timestamps:true
    }
);

const Post = mongoose.model("Post",postSchema);

export default Post