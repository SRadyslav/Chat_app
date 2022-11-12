import React from 'react'
import { ChatsBlock } from './ChatsBlock'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'



export const Chats = () => {
  const [chats, setChats] = React.useState([])
  const { currentUser } = React.useContext(AuthContext)
  const { dispatch, CHANGE_USER } = React.useContext(ChatContext)

  React.useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      });

      return () => {
        unsub();
      }
    }

    currentUser.uid && getChat()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({ type: CHANGE_USER, payload: u })
  }
  return (
    //sorted chatBlocks by a date from firestore and then map them
    <div className='chats'>
      {chats && Object.entries(chats)?.sort((a, b) => b[1].data - a[1].data).map(chat => (
        <ChatsBlock
          key={chat[0]}
          handleSelect={() => handleSelect(chat[1].userInfo)}
          displayName={chat[1].userInfo.displayName}
          text={chat[1].lastMessage?.text}
          photoURL={chat[1].userInfo.photoURL} />
      ))}
    </div>
  )
}
