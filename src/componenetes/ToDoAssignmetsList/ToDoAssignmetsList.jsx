import React, { useEffect, useState, useContext} from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { AssignmentRow } from '../AssignmentRow/AssignmentRow'

import './ToDoAssignmetsList.css'
export const ToDoAssignmetsList = () => {
    const location = useLocation();
    const { groupId } = location.state;
    const [ groupInfo, setgroupInfo] = useState([]);
    useEffect (() => {
        const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
          setgroupInfo(doc.data())
        })
      }, [groupId])
  return (
    <div className="ListasTareas">
    < AssignmentRow 
    nombreSubGrupo={groupInfo.groupName}
    groupId={groupInfo.uid}

    AssignmentName="Nombre de tarea por hacer"
    Page="DoingAssigmet"
    NavLinkName="Hacer"
    />
    
    </div>
  )
}
