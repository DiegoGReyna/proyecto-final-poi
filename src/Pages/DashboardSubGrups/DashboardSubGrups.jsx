import React, { useEffect, useState, useContext} from "react";
import { v4 as uuid } from "uuid";
import './DashboardSubGrups.css'
import { db } from "../../firebase";
import { doc, setDoc, onSnapshot, collection, arrayUnion } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

import SubGrup from '../../componenetes/SubGrup/SubGrup';

const DashboardSubGrups = () => {
    const {currentUser} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const [modal ,setModal]=useState(false);
    const [ groupName, setgroupName ] = useState("");
    const [allChats, setAllChats] = useState([]);
    const [chats, setChats] = useState([]);


    const toggleModal=()=>{
      setModal(!modal)
    }

    useEffect(() =>{
        const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
            setUserInfo(doc.data());
        });
        return newUser
    }, [currentUser.uid]);

    const AddGroup = async () =>{
        const chatId = uuid();
        await setDoc(doc(db, "groupMembers", chatId), {
            uid : chatId,
            groupName : groupName,
            members: arrayUnion({
                MemberName: userInfo.UserName,
                memberid: currentUser.uid
            })
        });
        await setDoc(doc(db, "groupMessages", chatId), {
            uid : chatId,
            
        });
        setModal(!modal)
    }

    useEffect(() =>{
        onSnapshot(collection(db, 'groupMembers'), (snapshot) =>{
        //setAllChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));

        setAllChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        /*for(var i = 0; i < allChats.length;  i++){
            for(var j = 0; j < allChats[i].members.length; j++){
                if(allChats[i].members[j].memberid == currentUser.uid){
                    console.log(allChats[i].members[j].MemberName);
                    setChats(current  => {[...current , allChats[i]]});
                    break;
                    
                }
            }
        }*/

        });
      }, [allChats]);

    return (
        <div className='Container_DashBoardSubGrups'>
            {modal && (
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal_content'>
            <div className='Container_CancelModal'>
                <button
                className='Button_Cancel'
                onClick={toggleModal}
                >X
                </button>
            </div>
            <h2 className='TitleText' >Agregar subgrupo</h2>
            <div className='Form_Modal'>
                
                <label htmlFor="Id_Email_AgregarChat">Nombre de subgrupo</label>
                <input placeholder='Ingrese un nombre' className='InpStyle' id="Id_Nombre_SubGrupo" onChange={e=>setgroupName(e.target.value)} value={groupName}/>
                <button  className='Button_Nav' 
                onClick={AddGroup}
                type="submit">Agregar subgrupo</button>

            </div>
            </div>
        </div>
      )}
            <div className='Box_DasBoardSubGrups'>
                    <div className='Box_Title'>
                        <h1>Subgrupos</h1>
                    </div>
                    <div className='Box_ButtonAgregarSubGrupo'>
                        <button  onClick={toggleModal} className='Button_AgregarSubGrupo'>Agregar subGrupo</button>
                    </div>
                    <div className='Container_Subgrupos'>

                    {
                        allChats.map(chat => 
                        <SubGrup
                        groupName={chat.groupName}
                        groupId={chat.uid}
                        />
                        )
                    }

                    </div>

            </div>
           


        </div>


    )
}

export default DashboardSubGrups