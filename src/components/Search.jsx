import React from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export const Search = () => {
  const [userName, setUserName] = React.useState('')
  const [user, setUser] = React.useState(null)
  const [err, setErr] = React.useState('')

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      setErr(error.message)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user' onChange={(e) => setUserName(e.target.value)} value={userName} 
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && 
      <div className='userChat'>
        <img src={user.photoURL} />
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}
