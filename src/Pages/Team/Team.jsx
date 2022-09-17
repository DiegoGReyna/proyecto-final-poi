import React from 'react'
import NavBarTeam from '../../componenetes/NavBarTeam/NavBarTeam'
import { Route, Routes } from "react-router-dom";
import TeamChatPage from '../TeamChatPage/TeamChatPage'
import './Team.css'

export default function Team() {
    return (
        <div className='BoxTeam'>
            <NavBarTeam />

            <Routes>
                <Route path="ChatEquipo" element={<TeamChatPage />} />
            </Routes>


        </div>


    )
}
