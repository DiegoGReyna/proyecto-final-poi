import NavBarMain from '../../componenetes/NavBarMain/NavBarMain'
import './UserPage.css';
import { Route, Routes } from 'react-router-dom';
import DashboardSubGrups from '../DashboardSubGrups/DashboardSubGrups.jsx';
import ChatsPage from '../ChatsPage/ChatsPage';
import SubGrupPage from '../SubGrupPage/SubGrupPage';
import RenderedMessages from '../../componenetes/RenderedMessages/RenderedMessages';
import { Perfil } from '../../componenetes/Perfil/Perfil';
import { Tareas } from '../Tareas/Tareas';
import { useNavigate } from 'react-router-dom'
import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import { MainGroupPage } from '../MainGroupPage/MainGroupPage';
import { TareasPage } from '../TareasPage/TareasPage';
import { AuthContext } from "../../context/AuthContext";

const UserPage = () => {
    const [user, setUser] = useState([]);
    const {currentUser} = useContext(AuthContext);

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

    return (
        <div className='ContainerUserPage'>
            <NavBarMain 
            
            />
            <Routes>
                <Route path="SubGrupos/*" element={<DashboardSubGrups />} />
                <Route path="SubGrupos/SubGrupo/*"element={<SubGrupPage />}/>
                <Route path="Chats/*" element={<ChatsPage />} /> 
                <Route path="ChatEquipo/*" element={<RenderedMessages />} />
                <Route path="Perfil" element={<Perfil/>} />
                <Route path="Tareas/*" element={<TareasPage />} />
                <Route path={user.UserCarrera+"/*"} element={<MainGroupPage carrera={user.UserCarrera}/>} />
            </Routes>
            
        </div>
    )
}

export default UserPage