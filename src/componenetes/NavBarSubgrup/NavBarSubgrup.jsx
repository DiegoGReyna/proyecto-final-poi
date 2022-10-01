import React from 'react'
import './NavBarSubgrup.css'
import { NavLink } from 'react-router-dom'
export default function NavBarSubgrup(props) {
    return (
        <div className='BoxNavBarTeam'>

            <NavLink className='TeamNavLinkNombreEquipo' to=''>
                <div className='ImgTeam'></div> <p>{props.nombreSubGrupo}</p></NavLink>
            <NavLink className='TeamNavLink' to=''>Tareas</NavLink>
            <NavLink className='TeamNavLink' to='SubGrupoChat'>Chat</NavLink>
            <NavLink className='TeamNavLink' to=''>Integrantes</NavLink>


        </div>
    )
}
