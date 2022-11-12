import React from 'react'
import { Message } from './Message'
import { ChatContext } from '../context/ChatContext'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'

export const Messages = () => {
  const [messages, setMessages] = React.useState([])
  const { data } = React.useContext(ChatContext)


  React.useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      setMessages([])
      unSub()
    }
  }, [data.chatId])

  return (
    <div className='messages'>
      {messages.length !== 0 && messages.map((m) =>
        <Message key={m.id} message={m} />)}
    </div>
  )
}
