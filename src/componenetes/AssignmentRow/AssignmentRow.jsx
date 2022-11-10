import React from "react";
import './AssignmentRow.css'
import { Link} from 'react-router-dom';



export const AssignmentRow = (props) => {
  return (
    <div className="ContainerAssignmentRow">
    <label htmlFor="InpTareasText">{props.AssignmentName}</label>
    <Link     to="NombreTarea"     className='InpSubTareas' > Hacer</Link>
    {/* <button className='InpSubTareas' type='button' onClick={ navigate('/UserPage')}>Hacer</button> */}
    </div>
  )
}
