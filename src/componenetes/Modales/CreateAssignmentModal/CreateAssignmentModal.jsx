import React from 'react'
import './CreateAssignmentModal.css'
import Form from 'react-bootstrap/Form';
export const CreateAssignmentModal = ({CloseModal}) => {
  return (
    <div className='BackGroundModal'>

        <div className='CardMoadal'>
            
            <form action="" className='FormModal'>
                <div className='ContainerButonX'>
                    <button type="button" className="ModalCalcelButton" onClick={()=>CloseModal(false)} ><span className="material-symbols-outlined">close</span></button>
                </div>
                <div className='ContainerInputLabelModal'> 
                <label className='LebelModal'  htmlFor="Id_NameAssigment">Nombre de la tarea:</label>
                <input className='InpStyleModal' type="text" name="" id="Id_NameAssigment" placeholder='Ingrese un nombre a la tarea'/>
                </div>

                <div className='ContainerInputLabelModal'>   
                <label className='LebelModal' htmlFor="Id_DescriptionAssigment">Descripcion de la tarea:</label>
                <input  className='InpStyleModal' type="text" name="" id="Id_DescriptionAssigment" placeholder='Ingrese una descripcion a la tarea'/>
                </div>

                <div className='ContainerInputLabelModal'>
                <label className='LebelModal' htmlFor="IdDueDate">fecha de entrega:</label>
                <input  className='InpStyleModal'   type="datetime-local" id="IdDueDate"
                            name="meeting-time" ></input>
                </div>

                <div className='ContainerInputLabelModal'>
                <label className='LebelModal' htmlFor="Id_Points">Puntos:</label>
               <input className='InpStyleModal' placeholder='Ingrese cuanto vale la tarea' type="number" name="" id="Id_Points" />
               </div>

               <div className='Container2Buttons'>
               <button  name='cancel' className='ButtonsModal' onClick={()=>CloseModal(false)} >cancelar</button>
                <button  name='submit' className='ButtonsModal submit' type='submit' >Asignar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
