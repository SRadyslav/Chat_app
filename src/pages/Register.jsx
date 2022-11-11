import React from 'react'
import Img from '../assets/img/img.svg'

export const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>R-Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='Display name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input style={{ display: "none" }} type='file' id='file' />
          <label htmlFor='file' >
            <img src={Img} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

