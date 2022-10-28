import React from 'react'
import './MessaByUser.css'

function MessaByUser(props) {
  console.log("MessaByUser:", props)
  return (
    <div className='Container_MessagesByUser'>
        <dir className="Box_MessagesByUser" >
        <div className="Box_MessagesByUser_TextTime">
            <div className="Box_MessagesByUser_Time">
            <p>{props.sendedTime}</p>
            </div>
        <div className="Box_MessagesByUser_Text">
        <p>{props.text}</p>
        </div>
        </div>
    </dir>
  </div>
  )
}

export default MessaByUser