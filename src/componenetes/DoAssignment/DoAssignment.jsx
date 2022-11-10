import React from 'react'
import { Link} from 'react-router-dom';
import './DoAssignment.css'
import { File } from '../File/File';
export const DoAssignment = (props) => {
  return (
    <div className='ContainerDoAssignment' >
        <form action="" className='FormDoAssignment'>
            <div className='ContainerTitle2Buttons' >
                    <h1>Nombre de la tarea</h1>
                    <div className='Container2Buttons' >
                        <button  className='Buttons' type='submit'>Entregar</button>
                        <Link  className='ButtonsLink' to="/UserPage/Tareas">Atras</Link>
                    </div>
            </div>
            <div className='ContainerDataAssigment'>
                <label htmlFor="idDate">Fecha de entega</label>
                <p id='idDate'>9/11/2022</p>
            </div>
            <div className='ContainerDataAssigment' >
                <label htmlFor="IdDescription">Descripcion</label>
                <p id='IdDescription'>Detalles de la descripcion</p>
            </div>
            <div className='ContainerDataAssigment'>
            <label htmlFor="IdPoints">Puntos</label>
                <p id='IdPoints'>90 de 100</p>
            </div>
            <div className='ContainerDataAssigmentInputFile'>
                <label htmlFor="IdAdFile">Adjuntar</label>
                <input  type="file" name="" id='IdAdFile' />
            </div>
            <div className='ContainerFilesUploaded'>
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
                <File />
            </div>
        </form>

    </div>
  )
}
