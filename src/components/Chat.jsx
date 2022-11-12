import React from 'react'
import Add from '../assets/img/add.svg'
import More from '../assets/img/more.svg'
import Cam from '../assets/img/cam.svg'
import { Messages } from './Messages'
import { Input } from './Input'
import { ChatContext } from '../context/ChatContext'


export const Chat = () => {
  const { data } = React.useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img width={24} src={Add} />
          <img width={24} src={Cam} />
          <img width={24} src={More} />
        </div>
      </div>
      {!data.isSelected
        ? <div className='popUp'>Select a chat to start messaging</div>
        : <>
          <Messages />
          <Input />
        </>}
    </div>
  )
}
