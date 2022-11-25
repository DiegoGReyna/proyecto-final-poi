import React, { useEffect, useState, useContext} from "react";
import './Tareas.css'
import { NavLink, useNavigate,Routes, Route} from 'react-router-dom'
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import {AssignmentRow} from '../../componenetes/AssignmentRow/AssignmentRow.jsx'
import { CreateAssignmentModal } from '../../componenetes/Modales/CreateAssignmentModal/CreateAssignmentModal';
import { CompletedAssignmentsList } from "../../componenetes/CompletedAssignmentsList/CompletedAssignmentsList";
import { ToDoAssignmetsList } from "../../componenetes/ToDoAssignmetsList/ToDoAssignmetsList";
import { UnderRevisionAssignmetsList } from "../../componenetes/UnderRevisionAssignmetsList/UnderRevisionAssignmetsList";
export const Tareas = (props) =>{
    const location = useLocation();
  const { groupId } = location.state;
  const [ groupInfo, setgroupInfo] = useState([]);

  useEffect (() => {
    const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
      setgroupInfo(doc.data())
    })
  }, [groupId])

    const [openModalAssignment,setOpenModalAssignment]=useState(false);
    return (
        <div className="BoxListTareas">
            <div className="TittleBoxTareas">
                <h2 className="TareaText">Tareas</h2>            
            </div>
            <div className="ContainerLinksAnbuttonsAssignmets">
            <NavLink className="LinkListAssignment"  to='ToDo' state={{ groupId: props.groupId }}>Pendientes</NavLink>
            <NavLink className="LinkListAssignment" to='Completed' state={{ groupId: props.groupId }}>Revisadas</NavLink>
            <NavLink  className="LinkListAssignment" to='UnderRevision' state={{ groupId: props.groupId }}>Por revisar</NavLink>

            <button  className="ButtonListAssignment"  style={{display:props.display }} onClick={()=>{
                 setOpenModalAssignment(true);
            }}>Agregar Tarea</button>
          </div>

            {/* <div className="ListasTareas">
                < AssignmentRow 
                nombreSubGrupo={groupInfo.groupName}
                groupId={groupInfo.uid}

                AssignmentName="Porque el capitalismo es el culpable de todos nuestros males tarea 1"/>
                
            </div> */}
            <Routes>
                
              
            <Route path="ToDo" element={<ToDoAssignmetsList />} />
            <Route path="Completed" element={<CompletedAssignmentsList />} />
            <Route path="UnderRevision" element={<UnderRevisionAssignmetsList />} />
                
            </Routes>


            {openModalAssignment&& <CreateAssignmentModal CloseModal={setOpenModalAssignment} />}
        </div>    
  )
}