
import NavBarMain from '../../componenetes/NavBarMain/NavBarMain'
import './UserPage.css';
import { Route, Routes } from 'react-router-dom';
import Team from '../Team/Team';
import ChatsPage from '../ChatsPage/ChatsPage';

export default function UserPage() {
    return (
        <div className='ContainerUserPage'>
            <NavBarMain 
            grupo="LMAD"
            />
            <Routes>
                <Route path="SubGrupos/*" element={<Team />} />
                <Route path="Chats/*" element={<ChatsPage />} /> 
            </Routes>
            
        </div>
    )
}
