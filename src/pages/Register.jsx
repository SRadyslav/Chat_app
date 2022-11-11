import React from 'react'
import Img from '../assets/img/img.svg';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../firebase.js'
import {useNavigate, Link} from 'react-router-dom';


export const Register = () => {
  const [err, setErr] = React.useState('')
  const [loading ,setLoading] = React.useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setErr(err.message);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>R-Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Display name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input style={{ display: "none" }} type='file' id='file' />
          <label htmlFor='file' >
            <img src={Img} width={35} />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign Up</button>
          {err && <span></span>}
        </form>
        <p>Do you have an account? <Link to='/login' className='link'>Login</Link></p>
      </div>
    </div>
  )
}

