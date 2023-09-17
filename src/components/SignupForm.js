import React from 'react'
import { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

export default function SignupForm() {
   const [formData,setFormData] = useState({
      email:"",firstName:" ",lastName:" ",password:"",confirmPassword:""
   })

   const [showPassword,setPassword]=useState(false);
   function changeHandler(event)
   {
        setFormData((prev)=>{
            return {
              ...prev,
                [event.target.name]: event.target.value
            }
        })
   }

  return (
    <div>
        <div className="">
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form action="">
        <div className="">
            <label htmlFor="">
                <p>First Name<sup>*</sup></p>
                <input type="text" name="firstName" id="firstName" placeholder='Enter your password'required  onChange={changeHandler} value={formData.firstName}/>
            </label>
            <label htmlFor="">
                <p>Last Name<sup>*</sup></p>
                <input type="text" name="lastName" id="lastName" onChange={changeHandler} placeholder='Enter you r Last Name' required value={formData.lastName}/>
            </label>
        </div>
            <label htmlFor="">
                <p>Email<sup>*</sup></p>
                <input type="email" name="email" id="email" onChange={changeHandler} placeholder='Enter your email' required value={formData.email}/>
            </label>
            <div className="">
            <label htmlFor="">
                <p> create password<sup>*</sup></p>
                <input type={showPassword?("text"):("password")} name="password" id="password" onChange={changeHandler} placeholder='Enter your password' required value={formData.password}/>
                <span onClick={()=>{showPassword((prev)=>!prev)}}>{showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
            </label>
            <label htmlFor="">
                <p> confirm password<sup>*</sup></p>
                <input type={showPassword?("text"):("password")} name="confirmPassword" id="confirmPassword" onChange={changeHandler} placeholder='Enter your password' required value={formData.password}/>
                <span onClick={()=>{setPassword((prev)=>!prev)}}>{showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}</span>
            </label>
            </div>
            <button>Create Account</button>
        </form>
    </div>
  )
}
