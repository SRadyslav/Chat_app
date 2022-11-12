import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export const Navbar = () => {
  const { currentUser } = React.useContext(AuthContext)
  const { dispatch, LOG_OUT } = React.useContext(ChatContext)

  const LogOut = () => {
    signOut(auth)
    dispatch({type: LOG_OUT})
  }

  return (
    <div className='navbar'>
      <span className='logo'>R-Chat</span>
      <div className='user'>
        <img src={currentUser.photoURL} />
        <span>{currentUser.displayName}</span>
        <button onClick={LogOut}>Log Out</button>
      </div>
    </div>
  )
}
