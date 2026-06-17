import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import  '../styles/signup.css'

export default function Signup(){
    const [name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[formData,setFormData]=useState({
        name:"",
        age:"",
        email:"",
        password:"",
    })
    const navigate = useNavigate();

    function handleName(e){
        setName(e.target.value);
    }

    function handleAge(e){
        setAge(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSignup(){
        console.log(name,age,email,password)
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
            const res =await axios.post("http://localhost:3300/api/auth/signup",
            formData);
        
        console.log(res.data.message);
        navigate("/")
            }catch(error){
                alert(error.response?.data?.message||"Signup Failed");
            }
    } 

    return(<div className="signup">

        <form className="signf" onSubmit={handleSubmit}>
            <h1 className="signh">FACELOOK</h1>
            <input className="signinput" type="text" value={formData.name} name="name" placeholder="Enter Your Name" onChange={ handleChange}/>
        <br/><br/>

        <input className="signinput" type="number" value={formData.age} name="age" placeholder="Enter Your Age" onChange={ handleChange}/>
        <br/><br/>

        <input className="signinput" type="text" value={formData.email} name="email" placeholder="Enter Your Email" onChange={ handleChange}/>
        <br/><br/>

        <input className="signinput" type="text"value={formData.password} name="password" placeholder="Enter Your Password" onChange={ handleChange}/>
        <br/><br/>

        <button className="signbtn"  type="submit">Signup</button>
        <Link className="link" to='/login'>LOGIN</Link>
        </form>
    </div>);
}