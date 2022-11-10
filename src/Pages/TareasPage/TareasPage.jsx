import React from 'react'
import './TareasPage.css'
import { Tareas } from '../Tareas/Tareas'
import { Route, Routes } from 'react-router-dom';
import { DoAssignment } from '../../componenetes/DoAssignment/DoAssignment';

export const TareasPage = () => {
  return (
    <div className='ContainerTareasPage'>


             <Routes>
                
                <Route path="" element={<Tareas/>} />
                <Route path="NombreTarea" element={<DoAssignment/>} />
            </Routes>
        


    </div>
  )
}
