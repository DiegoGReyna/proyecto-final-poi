import React, { useEffect, useState, useContext} from "react";
import { v4 as uuid } from "uuid";
import './GroupMembers.css'
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { doc, setDoc, onSnapshot, collection, arrayUnion, updateDoc } from "firebase/firestore";

const GroupMembers = () => {
    const location = useLocation();
    const { groupId } = location.state;
    const {currentUser} = useContext(AuthContext);

    const [modal ,setModal]=useState(false);
    const [ correoMember, setcorreoMember ] = useState("");
    const [ members, setMembers] = useState([]);
    const [ addMember, setAddMember] = useState([]);


    const toggleModal=()=>{
      setModal(!modal)
    }
    const AddMember = async () =>{
        

        onSnapshot(collection(db, 'users'), (snapshot) =>{
            setAddMember(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        });

        addMember.forEach((member)=>{

            if(member.UserEmail == correoMember && member.uid != currentUser.uid){
                updateDoc(doc(db, "groupMembers", groupId), {
                    members: arrayUnion({  
                        id: member.uid,
                        MemberName: member.UserName
                    })
                });
            }
        });
        setModal(!modal)
    }
    
    useEffect (() => {
        const unSub = onSnapshot(doc(db, "groupMembers", groupId), (doc) => {
            doc.exists() && setMembers(doc.data().members)
        })

        return () => {
            unSub()
        }
    }, [groupId])

    return (
        <div className='Container_DashBoardSubGrups'>
            {modal && (
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal_content'>
            <div className='Container_CancelModal'>
                <button
                className='Button_CancelMadal'
                onClick={toggleModal}
                >
                    <span className="material-symbols-outlined">
                            X
                            </span>

                </button>
            </div>
            <h2 className='TitleText' >Agregar Miembro</h2>
            <div className='Form_Modal'>
                
                <label htmlFor="Id_Email_AgregarChat">Correo</label>
                <input placeholder='Correo' className='InpStyle' type="email" id="Id_Nombre_SubGrupo" onChange={e=>setcorreoMember(e.target.value)} value={correoMember}/>
                <button  className='Button_Nav' 
                onClick={AddMember}
                type="submit">Agregar Miembro</button>

            </div>
            </div>
        </div>
      )}
            <div className='Box_DasBoardSubGrups'>
                    <div className='Box_Title'>
                        <h1>Miembros</h1>
                    </div>
                    <div className='Box_ButtonAgregarSubGrupo'>
                        <button  onClick={toggleModal} className='Button_AgregarSubGrupo'>Agregar Miembro</button>
                    </div>
                    <div className='Container_Miembros'>
                        {
                            members.map(member => 
                            <label className='MiembroNombre'>{member.MemberName}</label>
                            
                            )
                        }
                    </div>

            </div>
           


        </div>


    )
}

export default GroupMembers