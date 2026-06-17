import { useEffect,useState} from 'react';
import '../styles/profile.css'
import axios from 'axios';

export default function Profile(){
    const[user,setUser]=useState({});
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        fetchProfile();
    },[])

    async function fetchProfile() {
        try{
            const token = localStorage.getItem("token");
            const res = await axios.get("https://facebook-backend-dxez.onrender.com/api/post/dashboard",
                {
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
            )
            console.log(res.data)
            setUser(res.data.user);
            setPosts(res.data.posts);
        }catch(error){
            console.log(error)
        }
    }

    return(<div className="profile">
        <h1>My Profile</h1>
        <div className="profile-card">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
        </div>
        <h2>My Posts</h2>
        {
            posts.map((post)=>(
        <div className='post-card' key={post._id}>
            <p>{post.text}</p>
            </div>
            ))
            
}
    </div>);
}
