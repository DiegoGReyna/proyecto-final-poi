import './NavBarMain.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";


 const NavBarMain = () => {
    const [user, setUser] = useState([]);
    const {currentUser} = useContext(AuthContext);
    const navigate=useNavigate();
    var carrera = user.UserCarrera+"/Posts";

    useEffect(() =>{
        const newChat = onSnapshot(collection(db, 'users'), (snapshot) =>{
            snapshot.docs.map(doc => 
                doc.data().uid == currentUser.uid ?
                setUser((doc.data()))
                :
                null)
        });
            return newChat
      }, [currentUser.uid]);

    
    return (
        <div className='ContainerNavBarMain'>

            <NavLink className='MainNavLink' to='Perfil'>Perfil</NavLink>
            <NavLink className='MainNavLink' to={carrera}>{user.UserCarrera}</NavLink>
            <NavLink className='MainNavLink' to='SubGrupos'>SubGrupos</NavLink>
            <NavLink className='MainNavLink' to='Chats'>Chats</NavLink>
           
            <button  className='MainbuttonLink' onClick={()=> {signOut(auth); navigate('/')}}>Salir</button>
        </div>
    )
}

export default NavBarMain