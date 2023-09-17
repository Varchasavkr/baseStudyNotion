import React from 'react'
import Template from '../components/Template'
import LoginImg from "../assets/login.png"
export default function (setIsLoggedIn) {
 return (
     <Template title="welcome back"
               desc1="build skill for today tomorrow and beyond"
               desc2="Education to future proof your career"
               formtype="login" 
               setIsLoggedIn={setIsLoggedIn}
               image={LoginImg}></Template>
  )
}
