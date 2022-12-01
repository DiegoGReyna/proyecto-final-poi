import React from 'react'
import TextBar from '../TextBar/TextBar'
import RenderedMessages from '../RenderedMessages/RenderedMessages'
import './PrivChat.css'

const PrivChat = () => {

  return (
    <div className='Container_PrivChat'>
      <RenderedMessages />
      <TextBar />
    </div>
  )
}

export default PrivChat