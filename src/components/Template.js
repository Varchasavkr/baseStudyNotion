import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div>
        <div className="">
            <h1>{title}</h1>
            <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
            </p>
            {formtype === "SignUp"?<SignupForm setIsLoggedIn={setIsLoggedIn}/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>}
            <div className="">
                <div className=""></div>
                <p>OR</p>
                <div className=""></div>
            </div>
            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>
        <div className="">
            <img src={frameImage} alt="Pattern" width={558} height={504} loading='lazy' />
            <img src={image} alt="students" width={558} height={494} loading='lazy' />
        </div>
    </div>
  )
}
