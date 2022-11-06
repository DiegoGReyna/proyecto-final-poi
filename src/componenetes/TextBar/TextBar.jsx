import React, { useEffect, useState, useContext} from "react";
import './TextBar.css'
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore, query, where,getCountFromServer } from "firebase/firestore";

const TextBar = () => {
  const location = useLocation()
  const { userToUID } = location.state;
  const [ text, setText ] = useState("");
  const [ img, setImg ] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  const chatUser =  currentUser.uid + "-" + userToUID;
  var chatUserTo =  userToUID + "-" + currentUser.uid;
  const toUpdateSender = doc(db, "chats", chatUser);
  const toUpdateReciver = doc(db, "chats", chatUserTo);

  const sendMessage = async () => {
    const coll = collection(db, "chats");
    const docSnap = await getDoc(doc(coll, chatUser));

    let texto = document.getElementById("textId").value;
    if(texto == "") return;
    
    if(docSnap._document != null){
      await updateDoc(toUpdateSender, {
        messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
        }),
      });
      await updateDoc(toUpdateReciver, {
        messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
        }),
      });
    }
    else{
      await setDoc(toUpdateSender, {
        messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
        })
      });
      await setDoc(toUpdateReciver, {
        messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
        })
      });
    }

    document.getElementById("textId").value = "";

  }

  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <div className='Form_TextBar' onLoad={document.getElementById("textId").value = ""}>
              
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" onChange={e=>setText(e.target.value)} value={text} id="textId"/>
            
                <button className='Button_SendMassage' onClick={sendMessage}></button>    

                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input id="Id_Labe_UploadFile" className='Input_File' type="file" name=""/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage"></label>
                <input type="file" className='Input_File' name="" id="Id_Labe_UploadImage" />
                <button className='Button_SendLocation'></button>
            </div>
        </div>
    </div>
  )
}

export default TextBar