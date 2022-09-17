import './NavBarMain.css';
import { NavLink } from 'react-router-dom'



export default function NavBarMain() {
    return (
        <div className='ContainerNavBarMain'>

            <NavLink className='MainNavLink' to=''>Perfil</NavLink>
            <NavLink className='MainNavLink' to='Equipo'>Equipos</NavLink>
            <NavLink className='MainNavLink' to=''>Chats</NavLink>
            <NavLink className='MainNavLink' to=''>Logros</NavLink>
            <NavLink className='MainNavLink' to=''>Tareas</NavLink>
            <NavLink className='MainNavLink' to=''>Salir</NavLink>
        </div>
    )
}
