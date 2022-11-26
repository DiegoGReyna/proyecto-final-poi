import React from 'react'
import './MessaByUser.css'

function MessaByUser(props) {
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
            <p>{props.content}</p>
            :
            props.messageType == 2 ?
            <img src={props.content} alt="" width="60px" height="60px"/>
            :
            <a href={props.content} target="_blank">File</a>
          }
        </div>
        </div>
        </div>
    </dir>
  </div>
  )
}

export default MessaByUser