import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {useNavigate, Link} from 'react-router-dom';

export const Login = () => {
  const [err, setErr] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>R-Chat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button disabled={loading}>Sign In</button>
          {err && <span>{err}</span>}
        </form>
        <p>You don't have an account? <Link to='/register' className='link'>Register</Link></p>
      </div>
    </div>
  )
}
