import { useState,useEffect } from 'react';
import '../styles/home.css'
import axios from 'axios';

export default function Home(){
    const[posts,setPosts]=useState([]);
    const[editingId,setEditingId]=useState(null);
    const[editText,setEditText]=useState("");

    useEffect(()=>{
     fetchPosts();    
    },[]);

    async function fetchPosts() {
        try{
            const res = await axios.get(
                "https://facebook-backend-dxez.onrender.com/api/post"
            );
            console.log(res.data);
            setPosts(res.data.posts);
        }catch(error){
            console.log(error)
        }
        
    }

    async function deletePost(id) {
        try{
            const token =localStorage.getItem("token");
            const res = await axios.delete(`https://facebook-backend-dxez.onrender.com/api/post/delete/${id}`,
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
            alert(res.data.message);
            fetchPosts();
        }catch(error){
            console.log(error.response?.data?.message||"Delete Failed");
        }
    }

        async function updatePost(id) {
            try{
                const token =localStorage.getItem("token");
                const res =await axios.put(`https://facebook-backend-dxez.onrender.com/api/post/update/${id}`,
                    {text:editText},
                    {
                        headers:{
                            Authorization:`Bearer ${token}`
                        }
                    }
                );
                alert(res.data.message);
                setEditingId(null)
                setEditText("");
                fetchPosts("");
            }catch(error){
                alert(error.response?.data?.message || "Update Failed")
            }
            
        }
        
    
    return(<div className="home">
         <h1 className="home-title">WELCOME TO FACELOOK</h1>
        <div className="post-c">
            {
                posts.map((posts)=>(
                    <div className="post-card" key={posts._id}>
                        <h3>{posts.user?.name}</h3>
                    <p className='post-text'>{posts.text}</p>
                    <button className='edit-btn' onClick={()=>{setEditingId(posts._id);
                        setEditText(posts.text)
                    }}>EDIT</button>

                    {
                        editingId === posts._id && (
                            <>
                            <input
                            className='edit-in'
                            type='text'
                            value={editText}
                            onChange={(e)=>setEditText(e.target.value)}
                            />

                            <button className='save-btn' onClick={()=>updatePost(posts._id)}>
                        SAVE
                    </button>
                            </>
                        )
                        
                    }

                      <button className='delete-btn' 
                    onClick={()=>deletePost(posts._id)}>Delete</button>

                    
                    </div>
                ))
            }
        </div>
    </div>);
}