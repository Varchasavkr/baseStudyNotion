import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'
export default function SignUp(setIsLoggedIn) {
  return (
    
    <Template title="welcome back"
               desc1="join millions of students"
               desc2="Education to future proof your career"
               formtype="SignUp" 
               setIsLoggedIn={setIsLoggedIn}
               image={signupImg}>
               </Template>
  )
}
 