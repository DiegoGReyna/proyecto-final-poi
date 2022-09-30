import React from 'react'
import './PrivChatPage.css'
import PrivChat from '../../componenetes/PrivChat/PrivChat'
import ChatCallBarr from '../../componenetes/ChatCallBarr/ChatCallBarr'
function PrivChatPage() {
  return (
    <div className='Container_PrivChatPage'>
        <ChatCallBarr/> 
        <PrivChat/>    
    </div>
  )
}

export default PrivChatPage