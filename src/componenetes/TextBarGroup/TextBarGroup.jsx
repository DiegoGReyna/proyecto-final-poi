import React, { useEffect, useState, useContext} from "react";
import './TextBarGroup.css'
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore,onSnapshot } from "firebase/firestore";

const TextBarGroup = (props) => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  const [ text, setText ] = useState("");


  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  const sendMessage = async () => {
    if(text != ""){
      var _date = new Date().toISOString().slice(0, 10);
      await updateDoc( doc(db, "groupMessages", props.groupId), {
        messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            senderName: user.UserName,
            dateMessage: _date,
        }),
      });
      document.getElementById("textId").value = "";
    }
     
  }

  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <div className='Form_TextBar'>
            <div className="inputTextButtonSend">
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" onChange={e=>setText(e.target.value)} value={text} id="textId"/>
            
                <button className='Button_SendMassage' onClick={sendMessage}></button>
            </div>
            <div className="ContainerButtons">
                

                {/* <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage"></label>
                <input type="file" className='Input_File' name="" id="Id_Labe_UploadImage" />
                <button className='Button_SendLocation'></button> */}
                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input type="file" className='Input_File'  id="Id_Labe_UploadFile"/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage" ></label>
                <input type="file" className='Input_File'  id="Id_Labe_UploadImage" />

                <button className='Button_SendLocation'></button>


              </div>
            </div>
        </div>
    </div>
  )
}

export default TextBarGroup