import React from "react";
import './Tareas.css'

export const Tareas = () =>{
    return (
        <div className="BoxListTareas">
            <div className="TittleBoxTareas">
                <h2 className="TareaText">Tareas</h2>            
            </div>
            <div className="ListasTareas">
                <div className="Asignacion">
                    <label htmlFor="InpTareasText">Tarea 1</label>

                    <button className='InpSubTareas' type='Submit'>Hacer</button>
                </div>
            </div>
        </div>    
  )
}