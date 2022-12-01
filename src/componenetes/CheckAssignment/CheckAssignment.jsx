
import { Link,NavLink} from 'react-router-dom';
import './CheckAssignment.css'
import { FileUnderRevision } from '../FileUnderRevision/FileUnderRevision';
import React from 'react'

export const CheckAssignment = (props) => {
  return (
    <div className='ContainerDoAssignment' >
        <form action="" className='FormDoAssignment'>
            <div className='ContainerTitle2Buttons' >
                    <h1>{props.AssignmentName}</h1>
                    <div className='Container2Buttons' >
                        <button  className='Buttons' type='submit'>Revisar</button>
                        <NavLink   /*state={{ groupId: props.groupId }}*/   className='ButtonsLink' to={`/UserPage/${props.CurrentGroup}/Assignments/DashBoard`}>Atras</NavLink>
                    </div>
            </div>
            <div className='ContainerDataAssigment'>
                <label htmlFor="idDate">Fechas</label>
                <p id='idDate'>Entrega el: {props.SendedDate}   <br /> Fecha final: {props.DuetoDate}</p>
            </div>
            <div className='ContainerDataAssigment' >
                <label htmlFor="IdDescription">Descripcion</label>
                <p id='IdDescription'>{props.AssignmentDescription}</p>
            </div>
            <div className='ContainerDataAssigment'>
            <label htmlFor="IdPoints">Puntos</label>
                <div className='CheckPointsAssignmet'>
                    <input  className='InpStyleAssignmet'  type="text" /> <p id='IdPoints'> de {props.MaxPoints}</p>
               </div>
            </div>
            {/* <div className='ContainerDataAssigmentInputFile'>
                <label htmlFor="IdAdFile">Adjuntar</label>
                <input  type="file" name="" id='IdAdFile' />
            </div> */}
            <div className='ContainerFilesUploaded'>
                <FileUnderRevision FileName="Tarea_1_FinalFinal" />
            </div>
        </form>

    </div>
  )
}

