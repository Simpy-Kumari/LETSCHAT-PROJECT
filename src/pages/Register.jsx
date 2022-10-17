import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">LETSCHAT</span>
        <FontAwesomeIcon className="userIcon" icon={faUser} />
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password'/>
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <span>Add an avatar</span>
          </label>
          <button className="signupBtn">Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register