import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>R-Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <span>Roku</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}
