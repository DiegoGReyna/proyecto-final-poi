import React from 'react'
import './MessagesFromOthers.css'

function MessagesFromOthers() {
  return (
    <div className='Container_MessageFromOthers'>
      <dir className="Box_MessagesFromOthers" >
        <div className="Box_MessagesFromOthers_UserImage">

        </div>
        <div className="Box_MessagesFromOthers_UserTextTime">
          <div className="Box_MessagesFromOthers_UserTime">
            <div className="Box_MessagesFromOthers_User">
              <p>Diego Guillerno Reyna Ranirez</p>
            </div>
            <div className="Box_MessagesFromOthers_Time">
            <p>2:25pm</p>
            </div>

          </div>
          <div className="Box_MessagesFromOthers_Text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum.</p>
          </div>
        </div>
      </dir>
    </div>
  )
}

export default MessagesFromOthers