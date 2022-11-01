import './NavBarMain.css';
import { NavLink } from 'react-router-dom'



export default function NavBarMain(props) {
    return (
        <div className='ContainerNavBarMain'>

            <NavLink className='MainNavLink' to='Perfil'>Perfil</NavLink>
            <NavLink className='MainNavLink' to='LMAD'>{props.grupo}</NavLink>
            <NavLink className='MainNavLink' to='SubGrupos'>SubGrupos</NavLink>
            <NavLink className='MainNavLink' to='Chats'>Chats</NavLink>
            <NavLink className='MainNavLink' to='Logros'>Logros</NavLink>
            <NavLink className='MainNavLink' to='Tareas'>Tareas</NavLink>
            <NavLink className='MainNavLink' to='Salir'>Salir</NavLink>
        </div>
    )
}
