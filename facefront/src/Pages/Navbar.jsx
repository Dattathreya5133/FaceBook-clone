import { Link } from "react-router-dom";
import '../styles/navbar.css';

export default function Navbar(){

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        alert("Logged Out Successfully");
        window.location.href='/login';
    }

    return(<div className="navbar">
        <h1 className="logo">FACELOOK</h1>
        <div className="navlink">
            <Link to='/'>HOME</Link>
            <Link to='/create'>ADD-POST</Link>
            <Link to='/pro'>PROFILE</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    </div>);
}