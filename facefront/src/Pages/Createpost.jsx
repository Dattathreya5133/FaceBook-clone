import { useState } from "react";
import '../styles/create.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Createpost(){
    const[text,setText]=useState("");
    const navigate = useNavigate()

   async function handleSubmit(e){
        e.preventDefault();
        try{
            const token =
            localStorage.getItem("token");

            const res =await axios.post(
                "https://facebook-backend-dxez.onrender.com/api/post/create",
                {text},
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            );
            alert(res.data.message);
            setText("");
            navigate("/")
        }catch(error){
            alert(error.response?.data?.message||"Error creating Post");
        }
    }


    return(<div className="create">
        <h1>CREATE POST</h1>
        <form onSubmit={handleSubmit}>
            <textarea placeholder="What's on your mind?"
            value={text} onChange={(e)=>setText(e.target.value)}/>

            <button type="submit">POST</button>
        </form>
    </div>);
}