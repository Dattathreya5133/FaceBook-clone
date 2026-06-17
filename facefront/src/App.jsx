import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Profile from "./Pages/Profile.jsx";
import Home from "./Pages/Home.jsx";
import Createpost from "./Pages/Createpost.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
       <Route path="/create" element={<ProtectedRoute><Createpost/></ProtectedRoute>}/>
       <Route path="/pro" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App