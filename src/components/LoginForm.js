import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
export default function LoginForm({setIsLoggedIn}) {
   const navigate=useNavigate();
   
   const [formData,setFormData] =useState({
    email: '',
    password: ''
   })
   const [showPassword,setShowPassword] = useState(false);
   function changeHandler(event)
   {
        setFormData((prev)=>{
            return {
              ...prev,
                [event.target.name]: event.target.value
            }
        })
   }
   function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn=true;
    toast.success("logged in")
    navigate('/dashboard');
   }
  return (
       <div className="">
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="">
                <p>Email Address<sup>*</sup></p>
                <input type="email" required name="email" id="" onChange={changeHandler} placeholder='Enter Email Id' value={formData.email} />
            </label>
            <label htmlFor="">
                <p>password<sup>*</sup></p>
                <input type={showPassword?("text"):("password")} required name="password" id="" onChange={changeHandler} placeholder='Enter password' value={formData.password} />
                <span onClick={()=>{setShowPassword((prev)=>!prev)}}>{showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
                <Link to="#">
                    <p>Forgot Password?</p>
                </Link>
            </label>
            <button>Sign in</button>
        </form>
       </div>
    )
}
