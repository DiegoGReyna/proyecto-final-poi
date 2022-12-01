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
  const [ tareasPendientes, setTareasPendientes ] = useState([]);


  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  useEffect (() => {
      onSnapshot(doc(db, "userTareasPendientes", currentUser.uid), (doc) => {
        setTareasPendientes(doc.data().tareas);
      })
  }, []);
  
  return (
    <div className="ListasTareas">
      {
        tareasPendientes != undefined ?
          tareasPendientes.map(tarea=>
            <AssignmentRow 
            AssignmentName={tarea.nameTarea}
            Page="DoingAssigmet"
            NavLinkName="Hacer"
            idTarea={tarea.id}
            nombreTarea={tarea.nameTarea}
            descripcionTarea={tarea.descriptionTarea}
            fechaTarea={tarea.date}
            CurrentGroup={user.UserCarrera}
            />
          )
          :
          window.alert("No cuenta con tareas pendientes")
      }
    </div>
  )
}
