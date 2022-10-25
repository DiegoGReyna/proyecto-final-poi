import './NavBarMain.css';
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


 const NavBarMain = () => {

    const {currentUser} = useContext(AuthContext);
    const navigate=useNavigate();

    return (
        <div className='ContainerNavBarMain'>

            <NavLink className='MainNavLink' to=''>Perfil</NavLink>
            <NavLink className='MainNavLink' to='LMAD'></NavLink>
            <NavLink className='MainNavLink' to='SubGrupos'>SubGrupos</NavLink>
            <NavLink className='MainNavLink' to='Chats'>Chats</NavLink>
            <NavLink className='MainNavLink' to=''>Logros</NavLink>
            <NavLink className='MainNavLink' to=''>Tareas</NavLink>
            <button onClick={()=> {signOut(auth); navigate('/')}}>Salir</button>
        </div>
    )
}

export default NavBarMain