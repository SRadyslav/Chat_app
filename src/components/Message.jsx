import React from 'react'

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img width={50} src='https://images.pexels.com/photos/14327570/pexels-photo-14327570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img  src='https://images.pexels.com/photos/14327570/pexels-photo-14327570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </div>
    </div>
  )
}
