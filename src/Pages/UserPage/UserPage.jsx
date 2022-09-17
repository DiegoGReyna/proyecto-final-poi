
import NavBarMain from '../../componenetes/NavBarMain/NavBarMain'
import './UserPage.css';
import { Route, Routes } from 'react-router-dom';
import Team from '../Team/Team';

export default function UserPage() {
    return (
        <div className='ContainerUserPage'>
            <NavBarMain />
            <Routes>
                <Route path="Equipo/*" element={<Team />} />
            </Routes>
        </div>
    )
}
