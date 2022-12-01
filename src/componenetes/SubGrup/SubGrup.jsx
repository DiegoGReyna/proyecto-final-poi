import React from 'react'
import { Link } from 'react-router-dom'
import './SubGrup.css'

const SubGrup = (props) => {

  return (
    <div className='Container_SubGrup'>
        <Link className='Container_LinkSubGrup' to={'SubGrupo'} state={{ groupId: props.groupId }}>
        <div className='Container_ImgSubGrup'>
            <img src={props.groupPhoto} alt="" />
        </div>
        <div className='Container_NameSubGrup'>
                <p>{props.groupName}</p>
                <p hidden>{props.groupId}</p>
        </div>
        </Link>
    </div>
  )
}

export default SubGrup