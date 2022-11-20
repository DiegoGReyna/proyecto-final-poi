
import { Link} from 'react-router-dom';
import './DoAssignment.css'
import { File } from '../File/File';
import React from 'react'

export const CheckAssignment = (props) => {
  return (
    <div className='ContainerDoAssignment' >
        <form action="" className='FormDoAssignment'>
            <div className='ContainerTitle2Buttons' >
                    <h1>{props.AssignmentName}</h1>
                    <div className='Container2Buttons' >
                        <button  className='Buttons' type='submit'>Entregar</button>
                        <Link  className='ButtonsLink' to="/UserPage/Tareas">Atras</Link>
                    </div>
            </div>
            <div className='ContainerDataAssigment'>
                <label htmlFor="idDate">Fecha de entega</label>
                <p id='idDate'>{props.DuetoDate}</p>
            </div>
            <div className='ContainerDataAssigment' >
                <label htmlFor="IdDescription">Descripcion</label>
                <p id='IdDescription'>{props.AssignmentDescription}</p>
            </div>
            <div className='ContainerDataAssigment'>
            <label htmlFor="IdPoints">Puntos</label>
                <p id='IdPoints'>{props.Poits} de {props.MaxPoints}</p>
            </div>
            <div className='ContainerDataAssigmentInputFile'>
                <label htmlFor="IdAdFile">Adjuntar</label>
                <input  type="file" name="" id='IdAdFile' />
            </div>
            <div className='ContainerFilesUploaded'>
                <File FileName="Tarea_1_FinalFinal" />
            </div>
        </form>

    </div>
  )
}

