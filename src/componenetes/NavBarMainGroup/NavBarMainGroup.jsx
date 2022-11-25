import React from 'react'
import './NavBarMainGroup.css'
import { NavLink } from 'react-router-dom'

export const NavBarMainGroup = (props) => {
  return (
    <div className='BoxNavBarTeam'>

            <NavLink className='TeamNavLinkNombreEquipo' to='Posts'>
                <div className='ImgTeam'></div> <p>{props.nombreGrupo}</p></NavLink>
            <NavLink className='TeamNavLink' to=''>Tareas</NavLink>
            {/* <NavLink className='TeamNavLink' to='SubGrupoChat' state={{ groupId: props.groupId }}>Chat</NavLink> */}
            {/* <NavLink className='TeamNavLink' to='GroupMembers' state={{ groupId: props.groupId }}>Integrantes</NavLink> */}


        </div>
  )
}
