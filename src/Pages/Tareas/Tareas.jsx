import React, { useEffect, useState, useContext} from "react";
import './Tareas.css'
import { NavLink, Routes, Route} from 'react-router-dom'
import { arrayUnion, doc, collection, updateDoc, onSnapshot } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { db } from "../../firebase";
import { CompletedAssignmentsList } from "../../componenetes/CompletedAssignmentsList/CompletedAssignmentsList";
import { ToDoAssignmetsList } from "../../componenetes/ToDoAssignmetsList/ToDoAssignmetsList";
import { UnderRevisionAssignmetsList } from "../../componenetes/UnderRevisionAssignmetsList/UnderRevisionAssignmetsList";
import { AuthContext } from "../../context/AuthContext";
export const Tareas = (props) =>{

  const {currentUser} = useContext(AuthContext);  
  const [modal ,setModal]=useState(false);
  const [user, setUser] = useState([]);
  const [nombre, setNombre ] = useState("");
  const [descripcion, setDescripcion ] = useState("");
  const [fecha, setFecha ] = useState("");
  const [users, setUsers ] = useState([]);

  useEffect(() =>{
    const newChat = onSnapshot(collection(db, 'users'), (snapshot) =>{
        snapshot.docs.map(doc => 
            doc.data().uid == currentUser.uid ?
            setUser((doc.data()))
            :
            null)
    });
        return newChat
  }, [currentUser]);

  useEffect(() =>{
    onSnapshot(collection(db, 'users'), (snapshot) =>{
        snapshot.docs.map(doc => 
            setUsers(current => [...current, doc.data()])
        );
    });
  }, []);

  const toggleModal=()=>{
    setModal(!modal)
  }

  const createTarea=()=>{
    if(nombre!="" && descripcion!=""&&fecha!=""){
      var idTarea = uuid();
      users.forEach(async (u) => {
        if(u.uid != currentUser.uid && u.UserCarrera == user.UserCarrera){
          await updateDoc(doc(db, "userTareasPendientes", u.uid), {
            tareas: arrayUnion({
                id: idTarea,
                nameTarea: nombre,
                descriptionTarea: descripcion,
                date: fecha,
            }),
          });
        }
      })
      window.alert("Tarea agregada exitosamente");
      setModal(!modal);
      setFecha("");
      setNombre("");
      setDescripcion("");
    }
    else
    window.alert("Favor de llenar todos los campos");
  }

    return (
        <div className="BoxListTareas">
            <div className="TittleBoxTareas">
                <h2 className="TareaText">Tareas</h2>            
            </div>
            <div className="ContainerLinksAnbuttonsAssignmets">
            <NavLink className="LinkListAssignment"  to='ToDo' >Pendientes</NavLink>
            <NavLink className="LinkListAssignment" to='Completed' >Revisadas</NavLink>

            <button  className="ButtonListAssignment"  style={{display:props.display }} onClick={toggleModal}>Agregar Tarea</button>
          </div>
            <Routes>
            <Route path="ToDo" element={<ToDoAssignmetsList />} />
            <Route path="Completed" element={<CompletedAssignmentsList />} />                
            </Routes>


            { modal && (
              <div className='BackGroundModal'>

              <div className='CardMoadal'>
                  
                  <div className='FormModal'>
                      <div className='ContainerButonX'>
                          <button type="button" className="ModalCalcelButton" onClick={toggleModal} ><span className="material-symbols-outlined">close</span></button>
                      </div>
                      <div className='ContainerInputLabelModal'> 
                      <label className='LebelModal'  htmlFor="Id_NameAssigment">Nombre de la tarea:</label>
                      <input className='InpStyleModal' type="text" name="" id="Id_NameAssigment" placeholder='Ingrese un nombre a la tarea' onChange={e=>setNombre(e.target.value)} value={nombre}/>
                      </div>
      
                      <div className='ContainerInputLabelModal'>   
                      <label className='LebelModal' htmlFor="Id_DescriptionAssigment">Descripcion de la tarea:</label>
                      <input  className='InpStyleModal' type="text" name="" id="Id_DescriptionAssigment" placeholder='Ingrese una descripcion a la tarea' onChange={e=>setDescripcion(e.target.value)} value={descripcion}/>
                      </div>
      
                      <div className='ContainerInputLabelModal'>
                      <label className='LebelModal' htmlFor="IdDueDate">Fecha de entrega:</label>
                      <input  className='InpStyleModal'   type="date" id="IdDueDate"
                                  name="meeting-time" onChange={e=>setFecha(e.target.value)} value={fecha}></input>
                      </div>
      
                     <div className='Container2Buttons'>
                     <button  name='cancel' className='ButtonsModal' onClick={toggleModal} >Cancelar</button>
                      <button  name='submit' className='ButtonsModal submit' onClick={createTarea} >Asignar</button>
                      </div>
                  </div>
              </div>
          </div>
            )

            }
        </div>    
  )
}