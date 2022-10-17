import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">LETSCHAT</span>
        <FontAwesomeIcon className="userIcon" icon={faUser} />
        <span className="registerTitle">Login</span>
        <form action="" className="registerForm">
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <button className="signupBtn">Sign in</button>
        </form>
        <p> You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login