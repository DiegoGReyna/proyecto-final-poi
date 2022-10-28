import React from 'react'
import { useLocation } from 'react-router-dom'
import './PrivChatPage.css'
import PrivChat from '../../componenetes/PrivChat/PrivChat'
import ChatCallBarr from '../../componenetes/ChatCallBarr/ChatCallBarr'

const PrivChatPage = () => {
  const location = useLocation()
  const { userToUID } = location.state;

  return (
    <div className='Container_PrivChatPage'>
        <ChatCallBarr userToUID={userToUID}/> 
        <PrivChat/>    
    </div>
  )
}

export default PrivChatPage