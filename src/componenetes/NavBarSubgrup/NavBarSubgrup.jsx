import React from 'react'
import './NavBarSubgrup.css'
import { NavLink } from 'react-router-dom'

const NavBarSubgrup = (props) => {
    return (
        <div className='BoxNavBarTeam'>

            <NavLink className='TeamNavLinkNombreEquipo' state={{ groupId: props.groupId }} to='Posts'>
                <div className='ImgTeam'></div> <p>{props.nombreSubGrupo}</p></NavLink>
            <NavLink className='TeamNavLink' to='Assignments/DashBoard' state={{ groupId: props.groupId }} >Tareas</NavLink>
            <NavLink className='TeamNavLink' to='SubGrupoChat' state={{ groupId: props.groupId }}>Chat</NavLink>
            <NavLink className='TeamNavLink' to='GroupMembers' state={{ groupId: props.groupId }}>Integrantes</NavLink>


        </div>
    )
}

export default NavBarSubgrup