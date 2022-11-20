import React from "react";
import { useState } from 'react'
import './Tareas.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {AssignmentRow} from '../../componenetes/AssignmentRow/AssignmentRow.jsx'
import { CreateAssignmentModal } from '../../componenetes/Modales/CreateAssignmentModal/CreateAssignmentModal';
export const Tareas = (props) =>{
    const [openModalAssignment,setOpenModalAssignment]=useState(false);
    return (
        <div className="BoxListTareas">
            <div className="TittleBoxTareas">
                <h2 className="TareaText">Tareas</h2>            
            </div>
            <div>
            <NavLink>{props.NameLink1}</NavLink>
            <NavLink>{props.NameLink2}</NavLink>
            <button   style={{display:props.display }} onClick={()=>{
                 setOpenModalAssignment(true);
            }}>Agregar Tarea</button>
          </div>

            <div className="ListasTareas">
                < AssignmentRow AssignmentName="Porque el capitalismo es el culpable de todos nuestros males tarea 1"/>
                < AssignmentRow AssignmentName="Evasion fiscal y sus beneficios "/>
                < AssignmentRow AssignmentName="Como habrir una cuenta bancaria en las islas caiman "/>
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
                < AssignmentRow />
            </div>

            {openModalAssignment&& <CreateAssignmentModal CloseModal={setOpenModalAssignment} />}
        </div>    
  )
}