import React from "react";
import './Tareas.css'
import {AssignmentRow} from '../../componenetes/AssignmentRow/AssignmentRow.jsx'
export const Tareas = () =>{
    
    return (
        <div className="BoxListTareas">
            <div className="TittleBoxTareas">
                <h2 className="TareaText">Tareas</h2>            
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

            
        </div>    
  )
}