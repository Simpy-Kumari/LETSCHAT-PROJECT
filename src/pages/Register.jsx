import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'

const Register = () => {
  const [error,setError] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {      
      const res = createUserWithEmailAndPassword(auth, email, password);

    } catch (error) {
      setError(true);
    }
      
  }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">LETSCHAT</span>
        <FontAwesomeIcon className="userIcon" icon={faUser} />
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handlerSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <span>Add an avatar</span>
          </label>
          <button className="signupBtn">Sign up</button>
          {error && <span>Something went wrong..</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register