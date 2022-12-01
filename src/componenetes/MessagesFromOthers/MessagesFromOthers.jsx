import React from 'react'
import './MessagesFromOthers.css'
import {decode as base64_decode, encode as base64_encode} from 'base-64';

function MessagesFromOthers(props){
  var messageText = "";

  if(props.isEncrypted)
    messageText = base64_decode(props.content);
  else
    messageText = props.content;

  return (
    <div className='Container_MessageFromOthers'>
      <dir className="Box_MessagesFromOthers" >
        <div className="Box_MessagesFromOthers_UserImage">
          <img src={props.userImage} alt="UserImage"  />

        </div>
        <div className="Box_MessagesFromOthers_UserTextTime">
          <div className="Box_MessagesFromOthers_UserTime">
            <div className="Box_MessagesFromOthers_User">
              <p>{props.userName}</p>
            </div>
            <div className="Box_MessagesFromOthers_Time">
            <p>{props.sendedTime}</p>
            </div>

          </div>
          <div className="Box_MessagesFromOthers_Text">
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

export default MessagesFromOthers