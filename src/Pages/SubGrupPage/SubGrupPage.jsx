import React from 'react'
import './SubGrupPage.css'
import {Route, Routes } from 'react-router-dom';
import NavBarSubgrup from '../../componenetes/NavBarSubgrup/NavBarSubgrup'

import SubGrupChatPage from '../SubGrupChatPage/SubGrupChatPage';
function SubGrupPage() {
  return (
    <div className='Container_SubGrupPage'>
        <NavBarSubgrup 
            nombreSubGrupo="Nombre del sub Grupo"/>
      
            <Routes>
                    <Route path="SubGrupoChat" element={<SubGrupChatPage />} />        
            </Routes>
    </div>
  )
}

export default SubGrupPage