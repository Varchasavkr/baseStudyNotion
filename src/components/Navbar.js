import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setisLoggedIn = props.setIsLoggIn;
  return (
    <div className='flex justify-evenly'>
        <Link to="/">

        <img src={Logo} alt="Logo" width={160} height={32} loading='lazy' />
        </Link>
        <nav>
            <ul className='flex mr-10 ml-10 gap-10'>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/">About</Link></li>
                <li> <Link to="/">Contact</Link></li>
            </ul>
        </nav>
        <div className="flex mr-3 ml-4 gap-10">
          {
            !isLoggedIn &&
            <Link to="/Login"><button>Login</button></Link>
          }
          {
            !isLoggedIn &&
            <Link to="/SignUP"><button >Sign Up</button></Link>
          }
          {
            isLoggedIn &&
            <Link to="/"><button onClick={()=>{
                setisLoggedIn(false);
                toast.success("Logged out")
            }}>Logout</button></Link>
          }
          {
            isLoggedIn &&
            <Link to="/Dashboard"><button>Dashboard</button></Link>
          }
        </div>
    </div>
  )
}
