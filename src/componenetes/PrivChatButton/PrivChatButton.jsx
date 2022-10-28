import './PrivChatButton.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState, useContext} from "react";

const PrivChatButton = (props) => {

  return (
    <div className='Container_PrivChatButton' >
        <Link className='Box_PrivChat' to="PrivChat" state={{ userToUID: props.uid }} >
            <div className='Box_ChatImage'>
                <img src={props.imagen} alt="UserImage" width="60" height="60px"/>
            </div>
            <div className='Box_ChatUserName'>
                  <p>{props.userName}</p>
            </div>
        </Link>
    </div>
  )
}

export default PrivChatButton