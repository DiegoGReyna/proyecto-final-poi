import NavBarMain from '../../componenetes/NavBarMain/NavBarMain'
import './UserPage.css';
import { Route, Routes } from 'react-router-dom';
import DashboardSubGrups from '../DashboardSubGrups/DashboardSubGrups.jsx';
import ChatsPage from '../ChatsPage/ChatsPage';
import SubGrupPage from '../SubGrupPage/SubGrupPage';
import RenderedMessages from '../../componenetes/RenderedMessages/RenderedMessages';

const UserPage = () => {
    
    return (
        <div className='ContainerUserPage'>
            <NavBarMain 
            grupo=""
            />
            <Routes>
                <Route path="SubGrupos/*" element={<DashboardSubGrups />} />
                <Route path="SubGrupos/SubGrupo/*"element={<SubGrupPage />}/>
                <Route path="Chats/*" element={<ChatsPage />} /> 
                <Route path="ChatEquipo/*" element={<RenderedMessages />} />
            </Routes>
            
        </div>
    )
}

export default UserPage