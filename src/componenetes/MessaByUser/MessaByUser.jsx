import React from 'react'
import './MessaByUser.css'

function MessaByUser(props) {
  console.log(props);
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
            <img src={props.content} alt="" width="60px" height="60px"/>
          }
        </div>
        </div>
    </dir>
  </div>
  )
}

export default MessaByUser