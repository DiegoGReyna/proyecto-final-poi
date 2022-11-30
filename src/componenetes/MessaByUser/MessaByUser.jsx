import React from 'react'
import './MessaByUser.css'
import {decode as base64_decode, encode as base64_encode} from 'base-64';

function MessaByUser(props) {
  var messageText = "";

  if(props.isEncrypted)
    messageText = base64_decode(props.content);
  else
    messageText = props.content;

  return (
    <div className='Container_MessagesByUser'>
        <dir className="Box_MessagesByUser" >
        <div className="Box_MessagesByUser_TextTime">
            <div className="Box_MessagesByUser_Time">
            <p>{props.sendedTime}</p>
            </div>
        <div className="Box_MessagesByUser_Text">
          {
            props.messageType == 1 ?
            <p>{messageText}</p>
            :
            props.messageType == 2 ?
            <img src={messageText} alt="" width="60px" height="60px"/>
            :
            props.messageType == 3 ?
            <a href={messageText} target="_blank">File</a>
            :
            <a href={messageText} target="_blank">Ubicación</a>
          }
        </div>
        </div>
    </dir>
  </div>
  )
}

export default MessaByUser