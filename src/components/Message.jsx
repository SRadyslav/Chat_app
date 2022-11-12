import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

export const Message = ({ message }) => {
  const { currentUser } = React.useContext(AuthContext)
  const { data } = React.useContext(ChatContext)

  const divRef = React.useRef(null)

  React.useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" })

    return () => {

    }
  }, [message])

  const messageOwner = (message.senderId === currentUser.uid)
  const date = (message.date.toDate().toLocaleDateString('en-US'))
  const time = (message.date.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))

  return (
    <div ref={divRef} className={`message ${messageOwner && "owner"} `}>
      <div className='messageInfo'>
        <img width={50}
          src={messageOwner
            ? currentUser.photoURL
            : data.user.photoURL} />

        <span>{time}</span>
      </div>
      <div className='messageContent'>
        <span>{date}</span>
        <p>{message.text}</p>
        {message.img && <img src={message.img} />}
      </div>
    </div>
  )
}
