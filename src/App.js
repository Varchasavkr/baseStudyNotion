import "./App.css";
import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import { useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggIn]=useState(false);

  return <div>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggIn={setIsLoggIn}/>
          <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/Login" element={<Login setIsLoggIn={setIsLoggIn}></Login>}/>
            <Route path="/SignUp" element={<SignUp setIsLoggIn={setIsLoggIn}></SignUp>}/>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}/>
               
            
          </Routes>
          
          </div>;
}

export default App;
