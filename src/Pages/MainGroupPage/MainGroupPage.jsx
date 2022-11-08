
import './MainGroupPage.css'
import { NavBarMainGroup } from '../../componenetes/NavBarMainGroup/NavBarMainGroup'


import { Routes,useNavigate,Route } from 'react-router-dom'
import { onSnapshot, collection} from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import { MainGroupPostsPage } from '../MainGroupPostsPage/MainGroupPostsPage';

import { AuthContext } from "../../context/AuthContext";

export const MainGroupPage = () => {

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
    <div className='ContainerMainGroupPage'>
      <NavBarMainGroup nombreGrupo={user.UserCarrera} />
      
      <Routes>
       <Route path="Posts" element={<MainGroupPostsPage />} />      
      </Routes>
      
    </div>
  )
}
