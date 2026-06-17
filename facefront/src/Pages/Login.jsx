import { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import '../styles/login.css'

export default function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[formData,setFormData]=useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();

    function handleLogEmail(e){
        setEmail(e.target.value)
    }

     function handleLogPassword(e){
        setPassword(e.target.value)
    }

    function handleLogin(){
        console.log(email,password)
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
           const res=await axios.post("https://facebook-backend-dxez.onrender.com/api/auth/login",formData);
           console.log(res.data.message);

           localStorage.setItem("token",res.data.token)
           navigate("/");
        }catch(error){
            alert(error.response?.data?.message ||"Login Failed")
        }
    }

    return(
        <div className="login">

        <form className="loginf" onSubmit={handleSubmit}>
             <h1 className="loginh">FACELOOK</h1>
            <input className="logininput" name="email" value={formData.email} type="text" placeholder="Email" onChange={handleChange}/>
        <br/><br/>

        <input className="logininput" type="text" name="password" value={formData.password} placeholder="Password" onChange={handleChange}/>
        <br/><br/>

        <button className="loginbtn" type="submit">Login</button>
        <Link className="link" to='/signup'>SIGNUP</Link>
        </form>
        </div>
    );
}