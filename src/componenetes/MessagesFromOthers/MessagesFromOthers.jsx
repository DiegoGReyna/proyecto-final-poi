import React from 'react'
import './MessagesFromOthers.css'

function MessagesFromOthers(props){


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
              <p>{props.content}</p>
              :
              <img src={props.content} alt="" width="60px" height="60px"/>
            }
          </div>
        </div>
      </dir>
    </div>
  )
}

export default MessagesFromOthers