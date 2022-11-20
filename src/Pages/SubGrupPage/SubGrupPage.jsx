import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {Route, Routes } from 'react-router-dom';
import NavBarSubgrup from '../../componenetes/NavBarSubgrup/NavBarSubgrup'
import SubGrupChatPage from '../SubGrupChatPage/SubGrupChatPage';
import { useLocation } from 'react-router-dom';
import { db } from "../../firebase";
import './SubGrupPage.css';
import GroupMembers from "../../componenetes/GroupMembers/GroupMembers";
import { AssignmentsPage } from "../AssignmentsPage/AssignmentsPage";
import { TareasPage } from "../TareasPage/TareasPage";

const SubGrupPage = () => {
  const location = useLocation();
  const { groupId } = location.state;
  const [ groupInfo, setgroupInfo] = useState([]);

  useEffect (() => {
    const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
      setgroupInfo(doc.data())
    })
  }, [groupId])

  return (
    <div className='Container_SubGrupPage'>
        <NavBarSubgrup 
            nombreSubGrupo={groupInfo.groupName}
            groupId={groupInfo.uid}/>
      
          <Routes>
                <Route path="SubGrupoChat/*" element={<SubGrupChatPage />} />
                <Route path="GroupMembers/*" element={<GroupMembers />} />
                <Route path="Assignments/*" element={<TareasPage />} />
          </Routes>
    </div>
  )
}

export default SubGrupPage