import React from 'react'
import TextBar from '../TextBar/TextBar'
import RenderedMessages from '../RenderedMessages/RenderedMessages'
import './PrivChat.css'

const PrivChat = () => {

  //alert(document.getElementById("textId").value);
  //document.getElementById("textId").value = "";

  return (
    <div className='Container_PrivChat'>
      <RenderedMessages />
      <TextBar />
    </div>
  )
}

export default PrivChat