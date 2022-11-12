import React from 'react'
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext'
import { handleKeyEnter } from '../utils/handleKey';

export const Search = () => {
  const [userName, setUserName] = React.useState('')
  const [user, setUser] = React.useState(null)
  const [err, setErr] = React.useState('')

  const { currentUser } = React.useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName.toLowerCase()))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      setErr(error.message)
    }
  }


  const handleSelect = async () => {
    //check whether the group(chats in firestore) exist, if not create 
    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
    } catch (error) {}

    setUser(null)
    setUserName("")
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' onChange={(e) => setUserName(e.target.value)} value={userName}
          onKeyDown={(e) => handleKeyEnter(e, handleSearch)}
        />
      </div>
      {err && <span>User not found!</span>}
      {user &&
        <div className='userChat' onClick={handleSelect} >
          <img src={user.photoURL} />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>}
    </div>
  )
}
