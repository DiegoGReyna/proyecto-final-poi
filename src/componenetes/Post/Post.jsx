import React from 'react'

import './Post.css'
export const Post = (props) => {
  return (
    <div className='ContainerPost'>

        <div className='PostUserImage'>
                <img src={props.UserImage} alt="" />
        </div>

        <div className='PostData'>
                <div className='ContainerUserDate'>
                    <div className='PostUserName'>
                        <p>{props.UserName}</p>
                    </div>
                    <div className='PostDate'>
                        <p>{props.Date}</p>
                    </div>
                </div>
                <div className='PostMessage'>
                    <p>{props.PostMessage}</p>
                </div>
        </div>

    </div>
  )
}
