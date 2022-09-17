import React from 'react'
import './NavBarTeam.css'
import { NavLink } from 'react-router-dom'
export default function NavBarTeam() {
    return (
        <div className='BoxNavBarTeam'>

            <NavLink className='TeamNavLinkNombreEquipo' to=''>
                <div className='ImgTeam'></div> Nombre del Equipos</NavLink>
            <NavLink className='TeamNavLink' to=''>Tareas</NavLink>
            <NavLink className='TeamNavLink' to='/UserPage/Equipo/ChatEquipo'>Chat de quipo</NavLink>
            <NavLink className='TeamNavLink' to=''>Integrantes</NavLink>


        </div>
    )
}
