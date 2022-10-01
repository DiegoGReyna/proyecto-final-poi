import React from 'react'

import TextBar from '../TextBar/TextBar'
import RenderedMessages from '../RenderedMessages/RenderedMessages'
import './PrivChat.css'
function PrivChat() {
  return (
    <div className='Container_PrivChat'>
      <RenderedMessages />
      <TextBar />
    </div>
  )
}

export default PrivChat