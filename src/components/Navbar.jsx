import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const {currentUser} = React.useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>R-Chat</span>
      <div className='user'>
        <img src={currentUser.photoURL}/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}
