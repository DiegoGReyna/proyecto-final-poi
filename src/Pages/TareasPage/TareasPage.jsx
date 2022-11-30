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
export const TareasPage = (props) => {
  // const location = useLocation();
  // const { groupId } = location.state;
  // const [ groupInfo, setgroupInfo] = useState([]);

  // useEffect (() => {
  //   const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
  //     setgroupInfo(doc.data())
  //   })
  // }, [groupId])

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
                <Route path="DashBoard/*" element={<Tareas       NameLink1="Pendientes" NameLink2="Entregadads"
                // nombreSubGrupo={groupInfo.groupName}
                // groupId={groupInfo.uid}
                
                />} />
                <Route path="DoingAssigmet" element={<DoAssignment 
                // nombreSubGrupo={groupInfo.groupName}
                // groupId={groupInfo.uid}
                AssignmentName="Nombre de la tarea" 
                DuetoDate="11/11/2022" 
                AssignmentDescription="Descripcion de la tarea :D" 
                CurrentGroup={user.UserCarrera}
                MaxPoints="100"
                />} 
                
               
                
                />
                 <Route path="UnderRevisionAssignmet" element={<CheckAssignment 
                // nombreSubGrupo={groupInfo.groupName}
                // groupId={groupInfo.uid}
                AssignmentName="Nombre de la tarea" 
                DuetoDate="11/11/2022" 
                AssignmentDescription="Descripcion de la tarea :D" 
                SendedDate="10/11/2022"
                CurrentGroup={user.UserCarrera}
                MaxPoints="100"
                />} >
                </Route>


                <Route path="SeeCompletedAssignment" element={<SeeCompletedAssignment 
                // nombreSubGrupo={groupInfo.groupName}
                // groupId={groupInfo.uid}
                AssignmentName="Nombre de la tarea" 
                DuetoDate="11/11/2022" 
                AssignmentDescription="Descripcion de la tarea :D" 
                Poits="60"
                CurrentGroup={user.UserCarrera}
                MaxPoints="100"
                />} >
                </Route>
             
            </Routes>
        
            

    </div>
  )
}
