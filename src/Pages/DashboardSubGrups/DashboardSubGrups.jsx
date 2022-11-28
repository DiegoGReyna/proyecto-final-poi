import React, { useEffect, useState, useContext} from "react";
import { v4 as uuid } from "uuid";
import './DashboardSubGrups.css'
import { db } from "../../firebase";
import { arrayUnion, doc, collection, updateDoc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

import SubGrup from '../../componenetes/SubGrup/SubGrup';

const DashboardSubGrups = () => {
    const {currentUser} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const [modal ,setModal]=useState(false);
    const [ groupName, setgroupName ] = useState("");
    const [ chats, setChats ] = useState([]);
    const documentGroup = doc(db, "userGroups", currentUser.uid);


    const toggleModal=()=>{
      setModal(!modal)
    }

    useEffect(() =>{
        const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
            setUserInfo(doc.data());
        });
        return newUser;
    }, [currentUser.uid]);

    useEffect (() => {
        const unSub = onSnapshot(doc(db, "userGroups", currentUser.uid), (doc) => {
            setChats(doc.data().groups);
        })
        return unSub;
    }, [currentUser.uid]);

    const AddGroup = async () =>{
        const chatId = uuid();
        const coll = collection(db, "userGroups");
        const docSnap = await getDoc(doc(coll, currentUser.uid));
        if(docSnap._document != null){
            await updateDoc(documentGroup, {
                groups: arrayUnion({
                    uid : chatId,
                groupName : groupName,
                })
            });
        }
        else{
            await setDoc(documentGroup, {
                groups: arrayUnion({
                    uid : chatId,
                    groupName : groupName,
                })
            });
        }
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
            groupName : groupName,
        });
        setModal(!modal)
    }

    

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
                        chats != undefined ?
                            chats.map(chat => 
                                <SubGrup
                                groupName={chat.groupName}
                                groupId={chat.uid}
                                />
                            )
                        :
                        null
                    }

                    </div>

            </div>
           


        </div>


    )
}

export default DashboardSubGrups