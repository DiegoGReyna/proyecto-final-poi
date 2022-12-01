
import './MainGroupPage.css'
import { NavBarMainGroup } from '../../componenetes/NavBarMainGroup/NavBarMainGroup'

<<<<<<< HEAD
import { Routes,useNavigate,Route } from 'react-router-dom'
=======
import { TareasPage } from "../TareasPage/TareasPage";
import { Routes, Route } from 'react-router-dom'
>>>>>>> 1deaa10c3ded524070d90963f00cd096d9166cba
import { onSnapshot, collection} from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import { MainGroupPostsPage } from '../MainGroupPostsPage/MainGroupPostsPage';
import { AuthContext } from "../../context/AuthContext";

export const MainGroupPage = (props) => {

  return (
    <div className='ContainerMainGroupPage'>
      <NavBarMainGroup nombreGrupo={props.carrera} />
      
      <Routes>

       <Route path="/Posts" element={<MainGroupPostsPage carrera={props.carrera}/>} /> 
       <Route path="Assignments/*" element={<TareasPage/>} />

      </Routes>
      
    </div>
  )
}
