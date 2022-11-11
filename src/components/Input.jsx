import React from 'react'
import Img from '../assets/img/img.svg'
import Attach from '../assets/img/attach.svg'

export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type...' />
      <div className='send'>
        <img src={Attach} width={28} />
        <input type='file' style={{ display: 'none' }} id='file' />
        <label htmlFor='file'>
          <img src={Img} width={28} />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
