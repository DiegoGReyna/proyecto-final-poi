import React from 'react'
import './MessagesFromOthersGroup.css'

function MessagesFromOthersGroup(props){

  return (
    <div className='Container_MessageFromOthers'>
      <dir className="Box_MessagesFromOthers" >
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
            <p>{props.content}</p>
            :
            props.messageType == 2 ?
            <img src={props.content} alt="" width="60px" height="60px"/>
            :
            props.messageType == 3 ?
            <a href={props.content} target="_blank">File</a>
            :
            <a href={props.content} target="_blank">Ubicación</a>
          }
          </div>
        </div>
      </dir>
    </div>
  )
}

export default MessagesFromOthersGroup