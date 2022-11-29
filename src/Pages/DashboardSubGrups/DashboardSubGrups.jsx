import React, { useEffect, useState, useContext} from "react";
import { v4 as uuid } from "uuid";
import './DashboardSubGrups.css'
import { db, storage } from "../../firebase";
import { arrayUnion, doc, collection, updateDoc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../context/AuthContext";

import SubGrup from '../../componenetes/SubGrup/SubGrup';

const DashboardSubGrups = () => {
    const {currentUser} = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState([]);
    const [modal ,setModal]=useState(false);
    const [ groupName, setgroupName ] = useState("");
    const [ chats, setChats ] = useState([]);
    const documentGroup = doc(db, "userGroups", currentUser.uid);
    const [imgPreview,setImgPreview]=useState(null);
    const [img,setImg]=useState(null);
    const [error,setError]=useState(false);


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
        const storageRef = ref(storage, `/groupImage/${chatId}`);
                const uploadTask = uploadBytesResumable(storageRef, img);

                uploadTask.on(
                    (error) => {
                        //setErr(true);
                    },
                    () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        if(docSnap._document != null){
                            await updateDoc(documentGroup, {
                                groups: arrayUnion({
                                    uid : chatId,
                                    groupName : groupName,
                                    photoURL : downloadURL,
                                })
                            });
                        }
                        else{
                            await setDoc(documentGroup, {
                                groups: arrayUnion({
                                    uid : chatId,
                                    groupName : groupName,
                                    photoURL : downloadURL,
                                })
                            });
                        }
                        await setDoc(doc(db, "groupMembers", chatId), {
                            uid : chatId,
                            groupName : groupName,
                            photoURL : downloadURL,
                            members: arrayUnion({
                                MemberName: userInfo.UserName,
                                memberid: currentUser.uid,
                                
                            })
                        });
                        await setDoc(doc(db, "groupMessages", chatId), {
                            uid : chatId,
                            groupName : groupName,
                            photoURL : downloadURL,
                        });
                    });
                }
                );
        setModal(!modal)
    }

    const handleImage=(e)=>{
        const selected=e.target.files[0];
        const allowed_types=["image/png","image/jpeg","image/jpg"];
        if(selected&&allowed_types.includes(selected.type)){
            let reader=new FileReader();
            reader.onloadend=()=>{
                setImg(e.target.files[0]);
                setImgPreview(reader.result);
            }
            reader.readAsDataURL(selected);
        }else{
            setError(true)
            console.log("tipo de archivo no aceptado")
        }
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
                
            <div className="ContainerImgCreateAccount">
                            {error && <p>File not supported</p>}
                            <div 
                            style={{
                                background:imgPreview
                                ?`url("${imgPreview}") no-repeat center/cover`
                                :`url(../img/perro.jpg) no-repeat center/cover`
                                
                            }} className="BoxImageCreateAccout">
                              
                                {/* <img src={require('../img/perro.jpg')} alt="" /> */}

                            </div>
                            <label className="labelFileUploaed" htmlFor="InptFileCreateAccount" >Imagen de perfil</label>
                            <input  onChange={handleImage} className="InpFileStyle" type="file" name="" id="InptFileCreateAccount" />
                        </div>

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
                                groupPhoto={chat.photoURL}
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