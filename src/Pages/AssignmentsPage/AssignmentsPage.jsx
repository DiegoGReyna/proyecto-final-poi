import React from 'react'
import { useState } from 'react'
import { CreateAssignmentModal } from '../../componenetes/Modales/CreateAssignmentModal/CreateAssignmentModal';
import './AssignmentsPage.css'
export const AssignmentsPage = () => {
    const [openModalAssignment,setOpenModalAssignment]=useState(false);
  return (
    <div className='ContainerAssignmentsPage' >
        <div>
                <a href="">Pendientes</a>
                <a href="">Entregadas</a>
        </div>

        <div className='ContainerAssignments'>

        </div>
        <div>
            <button onClick={()=>{
                 setOpenModalAssignment(true);
            }}>Agregar Tarea</button>
        </div>
        

        {openModalAssignment&& <CreateAssignmentModal CloseModal={setOpenModalAssignment} />}
        </div>
  )
}
