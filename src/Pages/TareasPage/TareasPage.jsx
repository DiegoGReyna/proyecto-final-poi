import React, { useEffect, useState, useContext} from "react";
import './TareasPage.css'
import { Tareas } from '../Tareas/Tareas'
import { Route, Routes } from 'react-router-dom';
import { doc, onSnapshot, collection } from "firebase/firestore";
import { useLocation } from 'react-router-dom';
import { db } from "../../firebase";
import { DoAssignment } from '../../componenetes/DoAssignment/DoAssignment';
import { CheckAssignment } from "../../componenetes/CheckAssignment/CheckAssignment";
import { SeeCompletedAssignment } from "../../componenetes/SeeCompletedAssignment/SeeCompletedAssignment";
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
export const TareasPage = () => {

  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);


  return (
    <div className='ContainerTareasPage'>
             <Routes>
                <Route path="DashBoard/*" element={<Tareas NameLink1="Pendientes" NameLink2="Entregadads" />} />
                <Route path="DoingAssigmet" element={<DoAssignment/>}/>
            </Routes>
    </div>
  )
}
