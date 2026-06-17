import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        age:{
            type:Number,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            minlength:7,
        },

},{
    timestamps:true,
}
);

const Users = mongoose.model("Users",userSchema);

export default Users