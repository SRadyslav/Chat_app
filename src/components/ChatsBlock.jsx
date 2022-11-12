import React from 'react'

export const ChatsBlock = ({ displayName, text, photoURL, handleSelect }) => {
    return (
        <div className='userChat' onClick={handleSelect}>
            <img src={photoURL} />
            <div className='userChatInfo'>
                <span>{displayName}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}
