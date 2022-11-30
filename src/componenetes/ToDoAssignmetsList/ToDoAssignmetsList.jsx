import React, { useEffect, useState, useContext} from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { AssignmentRow } from '../AssignmentRow/AssignmentRow'
import { AuthContext } from "../../context/AuthContext";
import './ToDoAssignmetsList.css'
export const ToDoAssignmetsList = () => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);
  
  return (
    <div className="ListasTareas">
    < AssignmentRow 
    // nombreSubGrupo={groupInfo.groupName}
    // groupId={groupInfo.uid}

    AssignmentName="Nombre de tarea por hacer"
    Page="DoingAssigmet"
    NavLinkName="Hacer"
    CurrentGroup={user.UserCarrera}
    />
    
    </div>
  )
}
