import React from 'react'
import './MessagesFromOthers.css'

function MessagesFromOthers(props) {
  return (
    <div className='Container_MessageFromOthers'>
      <dir className="Box_MessagesFromOthers" >
        <div className="Box_MessagesFromOthers_UserImage">
          <img src={require(`../../img/perro.jpg`)} alt="UserImage"  />

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
          <p>{props.text}</p>
          </div>
        </div>
      </dir>
    </div>
  )
}

export default MessagesFromOthers