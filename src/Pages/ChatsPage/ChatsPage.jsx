import {Route, Routes } from "react-router-dom";
import React from 'react'
import NavBarChats from '../../componenetes/NavBarChats/NavBarChats'
import PrivChatPage from "../PrivChatPage/PrivChatPage";

import './ChatsPage.css'
function ChatsPage() {
  return (
    
    <div className='Container_ChatsPage'>
        <NavBarChats />
        <Routes>
        <Route path="PrivChat" element={<PrivChatPage />} /> 
        </Routes>      
    </div>
   
  )
}

export default ChatsPage