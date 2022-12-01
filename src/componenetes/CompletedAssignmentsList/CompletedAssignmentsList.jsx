import React, { useEffect, useState, useContext} from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { AssignmentRowCompleted } from '../AssignmentRowCompleted/AssignmentRowCompleted'
import { AuthContext } from "../../context/AuthContext";
import './CompletedAssignmentsList.css'
export const CompletedAssignmentsList = () => {

  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  const [ tareasCompletadas, setTareasCompletadas ] = useState([]);

  useEffect (() => {
    onSnapshot(doc(db, "userTareasTerminadas", currentUser.uid), (doc) => {
      setTareasCompletadas(doc.data().tareas);
    })
}, []);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  return (
    <div className="ListasTareas">
      {
        tareasCompletadas != undefined?
          tareasCompletadas.map(tarea =>
            < AssignmentRowCompleted 
            AssignmentName={tarea.nameTarea}
            />
          )
        :
        null
      }
    
    </div>
  )
}
