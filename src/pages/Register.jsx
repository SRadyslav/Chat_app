import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>R-Chat</span>
        <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Display name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password'/>
                <input type='file' placeholder=''/>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p> 
        </div>
    </div>
  )
}
