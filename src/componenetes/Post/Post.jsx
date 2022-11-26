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
                    { props.PostType == 1 ?
                    <p>{props.PostContent}</p>
                    :
                    <img src={props.PostContent} alt="" width="60px" height="60px"/>
                    }
                </div>
        </div>

    </div>
  )
}
