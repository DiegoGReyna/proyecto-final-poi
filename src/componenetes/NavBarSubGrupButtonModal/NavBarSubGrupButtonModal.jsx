import React, { useEffect, useState, useContext} from "react";
import { NavLink } from 'react-router-dom'

import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';





export const NavBarSubGrupButtonModal = ({CloseModal},props) => {
    const location = useLocation();
    const { groupId } = location.state;
    const [ groupInfo, setgroupInfo] = useState([]);
  
    useEffect (() => {
      const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
        setgroupInfo(doc.data())
      })
    }, [groupId])
  return (
    <div className='BackGroundModal'>

        <div className='CardMoadal'>
            
            
               
               <button  name='cancel' className='ButtonsModal' onClick={()=>CloseModal(false)} >cancelar</button>
               <NavLink className='TeamNavLink' to='AssignmentsDashBoard' state={{ groupId: props.groupId }} >Tareas</NavLink>
                <NavLink className='TeamNavLink' to='SubGrupoChat' state={{ groupId: props.groupId }}>Chat</NavLink>
            <NavLink className='TeamNavLink' to='GroupMembers' state={{ groupId: props.groupId }}>Integrantes</NavLink>

        </div>
    </div>
  )
}
