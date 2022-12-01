import React, { useEffect, useState, useContext} from "react";
import { arrayUnion, doc, collection, updateDoc, arrayRemove } from "firebase/firestore";
import { useNavigate ,NavLink} from 'react-router-dom';
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import './DoAssignment.css'
import { File } from '../File/File';
import { useLocation } from 'react-router-dom';

export const DoAssignment = () => {
    const navigate=useNavigate();
    const [ file, setFile ] = useState("");
    const location = useLocation();
    const {currentUser} = useContext(AuthContext);
    const { carrera } = location.state;
    const { id } = location.state;
    const { nombre } = location.state;
    const { descripcion } = location.state;
    const { fecha } = location.state;

    const sendFile = async (e) => {
        const selected=e.target.files[0];
          const allowed_types="application/pdf";
          if(selected&&allowed_types == selected.type){
            setFile(selected);
          }
    }

    const uploadTarea = async () =>{
        if(file != ""){
            await updateDoc(doc(db, "userTareasTerminadas", currentUser.uid), {
                tareas: arrayUnion({
                    id: id,
                    nameTarea: nombre
                }),
            });
            await updateDoc(doc(db, "userTareasPendientes", currentUser.uid), {
                tareas: arrayRemove({
                    id: id,
                    nameTarea: nombre,
                    descriptionTarea: descripcion,
                    date: fecha,
                }),
              });
            window.alert("Tarea subida existosamente");
            navigate(`/UserPage/${carrera}/Assignments/DashBoard`);
        }
        else{
            window.alert("Suba un archivo para poder entregar la tarea");
        }
    }


  return (
    <div className='ContainerDoAssignment' >
        <div className='FormDoAssignment'>
            <div className='ContainerTitle2Buttons' >
                    <h1>{nombre}</h1>
                    <div className='Container2Buttons' >
                        <button  className='Buttons' type='submit' onClick={uploadTarea}>Entregar</button>
                        <NavLink className='ButtonsLink' to={`/UserPage/${carrera}/Assignments/DashBoard`}>Atras</NavLink>
                    </div>
            </div>
            <div className='ContainerDataAssigment'>
                <label htmlFor="idDate">Fecha de entrega</label>
                <p id='idDate'>{fecha}</p>
            </div>
            <div className='ContainerDataAssigment' >
                <label htmlFor="IdDescription">Descripcion</label>
                <p id='IdDescription'>{descripcion}</p>
            </div>
            
            <div className='ContainerDataAssigmentInputFile'>
                <label htmlFor="IdAdFile">Adjuntar</label>
                <input  type="file" onChange={sendFile} id='IdAdFile' />
            </div>
            { 
            file != "" ?
                <div className='ContainerFilesUploaded'>
                    <File FileName={nombre} />
                </div>
            :
            null
            }
        </div>

    </div>
  )
}
