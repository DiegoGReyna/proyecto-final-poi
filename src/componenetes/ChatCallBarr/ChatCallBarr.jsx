import React from 'react'
import './ChatCallBarr.css'
function ChatCallBarr() {
  return (
    <div className='Box_ChatCallBarr'>
        <div className='UserNameChat_BoxImage'>
            <div className='ImgChatUser'>
                    <img  src={require('../../img/perro.jpg')} alt="UserImage"  />
            </div>
            <div className='UserNameChat'>
                <p>Nombre de usuario</p>
            </div>
        </div>
        <div className='Box_Buttons_ChatCallBarr'>
            <button className='Button_Call'> </button>
            <button className='Button_VideoChat'> </button>
        </div>
    </div>
  )
}

export default ChatCallBarr