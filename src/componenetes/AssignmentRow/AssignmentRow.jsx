import React from "react";
import './AssignmentRow.css'
import { Link,NavLink} from 'react-router-dom';



export const AssignmentRow = (props) => {
  return (
    <div className="ContainerAssignmentRow">
    <label htmlFor="InpTareasText">{props.AssignmentName}</label>
    <NavLink     to={`/UserPage/${props.CurrentGroup}/Assignments/${props.Page}`}     className='InpSubTareas'   >{props.NavLinkName}</NavLink>
    {/* <button className='InpSubTareas' type='button' onClick={ navigate('/UserPage')}>Hacer</button> */}
    </div>
  )
}
