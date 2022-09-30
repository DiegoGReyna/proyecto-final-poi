import React from 'react'
import './NavBarChats.css'
import PrivChatButton from '../PrivChatButton/PrivChatButton'
function NavBarChats() {
  return (
    <div className='Container_NavBarChats'>
      <div className='Container_Button'>
        <button className='Button_Nav'>Agregar chat</button>
      </div>
      <div className='Container_ChatsButtons'>
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      <PrivChatButton />
      </div>
    </div>
  )
}

export default NavBarChats