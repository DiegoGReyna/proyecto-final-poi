import React from 'react'
import './TareasPage.css'
import { Tareas } from '../Tareas/Tareas'
import { Route, Routes } from 'react-router-dom';

import { DoAssignment } from '../../componenetes/DoAssignment/DoAssignment';
import { NavLink, useNavigate } from 'react-router-dom'
export const TareasPage = (props) => {
  return (
    <div className='ContainerTareasPage'>
             <Routes>
                
                <Route path="" element={<Tareas NameLink1="Pendientes" NameLink2="Entregadads"/>} />
                <Route path="NombreTarea" element={<DoAssignment 
                AssignmentName="Nombre de la tarea" 
                DuetoDate="11/11/2022" 
                AssignmentDescription="Descripcion de la tarea :D" 
                Poits="60"
                MaxPoints="100"
                />} />

            </Routes>
        


    </div>
  )
}
