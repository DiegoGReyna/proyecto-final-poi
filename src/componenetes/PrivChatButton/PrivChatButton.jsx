import { Link } from 'react-router-dom'
import React from 'react'
import './PrivChatButton.css'
function PrivChatButton(props) {
  return (
    <div className='Container_PrivChatButton'>
        <Link className='Box_PrivChat' to="PrivChat">
           
                <div className='Box_ChatImage'>
                    <img   src={require(`../../img/${props.imagen}.jpg`)} alt="UserImage" width="60" height="60px"/>
                </div>
                <div className='Box_ChatUserName'>
                        <p>{props.userName}</p>
                </div>
            
        </Link>
        <div className='Container_DeleteChatButton'>
            <button className='Button_Cancel' ></button>
        </div>
    </div>
  )
}

export default PrivChatButton