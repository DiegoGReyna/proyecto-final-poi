import './NavBarMain.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { doc, onSnapshot, collection, getDoc } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


 const NavBarMain = () => {
    const [user, setUser] = useState([]);
    const {currentUser} = useContext(AuthContext);
    const navigate=useNavigate();

    useEffect(() =>{
        const newChat = onSnapshot(collection(db, 'users'), (snapshot) =>{
            snapshot.docs.map(doc => 
                doc.data().uid == currentUser.uid ?
                setUser((doc.data()))
                :
                null)
        });
            return newChat
      }, [currentUser]);

    
    return (
        <div className='ContainerNavBarMain'>

            <NavLink className='MainNavLink' to='Perfil'>Perfil</NavLink>
            <NavLink className='MainNavLink' to={user.UserCarrera}>{user.UserCarrera}</NavLink>
            <NavLink className='MainNavLink' to='SubGrupos'>SubGrupos</NavLink>
            <NavLink className='MainNavLink' to='Chats'>Chats</NavLink>
            <NavLink className='MainNavLink' to='Logros'>Logros</NavLink>
            <NavLink className='MainNavLink' to='Tareas'>Tareas</NavLink>
            <button onClick={()=> {signOut(auth); navigate('/')}}>Salir</button>
        </div>
    )
}

export default NavBarMain