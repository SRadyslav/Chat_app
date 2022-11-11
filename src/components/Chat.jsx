import React from 'react'
import Add from '../assets/img/add.svg'
import More from '../assets/img/more.svg'
import Cam from '../assets/img/cam.svg'
import { Messages } from './Messages'
import {Input} from './Input'


export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Roku</span>
        <div className='chatIcons'>
          <img width={24} src={Add}/>
          <img width={24} src={Cam} />
          <img width={24} src={More} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
