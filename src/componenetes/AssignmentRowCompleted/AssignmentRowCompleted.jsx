import React from "react";
import './AssignmentRowCompleted.css'
import { Link,NavLink} from 'react-router-dom';



export const AssignmentRowCompleted = (props) => {
  return (
    <div className="ContainerAssignmentRow">
    <label htmlFor="InpTareasText">{props.AssignmentName}</label>
    </div>
  )
}
