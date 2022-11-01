
import NavBarMain from '../../componenetes/NavBarMain/NavBarMain'
import './UserPage.css';
import { Route, Routes } from 'react-router-dom';
import DashboardSubGrups from '../DashboardSubGrups/DashboardSubGrups.jsx';
import ChatsPage from '../ChatsPage/ChatsPage';
// import NavBarSubgrup from '../../componenetes/NavBarSubgrup/NavBarSubgrup';
import SubGrupPage from '../SubGrupPage/SubGrupPage';
import RenderedMessages from '../../componenetes/RenderedMessages/RenderedMessages';
import { Perfil } from '../../componenetes/Perfil/Perfil';
import { Tareas } from '../../componenetes/Tareas/Tareas';

export default function UserPage() {
    return (
        <div className='ContainerUserPage'>
            <NavBarMain 
            grupo="LMAD"
            />
            <Routes>
                <Route path="SubGrupos/*" element={<DashboardSubGrups />} />
                <Route path="SubGrupos/SubGrupo/*"element={<SubGrupPage />}/>
                <Route path="Chats/*" element={<ChatsPage />} /> 
                <Route path="ChatEquipo/*" element={<RenderedMessages />} />
                <Route path="Perfil" element={<Perfil />} />
                <Route path="Tareas" element={<Tareas />} />
            </Routes>
            
        </div>
    )
}
