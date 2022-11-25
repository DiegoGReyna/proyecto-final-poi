import React, {  useState, useContext} from "react";
import './TextBar.css'
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const TextBar = () => {
  const location = useLocation()
  const { userToUID } = location.state;
  const [ text, setText ] = useState("");
  const [ img, setImg ] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const chatUser =  currentUser.uid + "-" + userToUID;
  var chatUserTo =  userToUID + "-" + currentUser.uid;
  const toUpdateSender = doc(db, "chats", chatUser);
  const toUpdateReciver = doc(db, "chats", chatUserTo);


  const sendMessage = async () => {
    if(text != ""){
      var _date = new Date().toISOString().slice(0, 10);
      const coll = collection(db, "chats");
      const docSnap = await getDoc(doc(coll, chatUser));
      if(docSnap._document != null){
        await updateDoc(toUpdateSender, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              content: text,
              senderId: currentUser.uid,
              date: _date,
          }),
        });
        await updateDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              content: text,
              senderId: currentUser.uid,
              date: _date,
          }),
        });
      }
      else{
        await setDoc(toUpdateSender, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              content: text,
              senderId: currentUser.uid,
              date: _date,
          })
        });
        await setDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              content: text,
              senderId: currentUser.uid,
              date: _date,
          })
        });
      }
      document.getElementById("textId").value = "";
    }
  }

  const sendImage = async (e) => {
    const selected=e.target.files[0];
    console.log(selected);
    const allowed_types=["image/png","image/jpeg","image/jpg"];
    if(selected&&allowed_types.includes(selected.type)){
       try{        
        const storageRef = ref(storage, `/individualChatsImages/${uuid()}`);
        const uploadTask = uploadBytesResumable(storageRef, selected);

        uploadTask.on(
            (error) => {
                //setErr(true);
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              var _date = new Date().toISOString().slice(0, 10);
              const coll = collection(db, "chats");
              const docSnap = await getDoc(doc(coll, chatUser));
              console.log(chatUser);
              if(docSnap._document != null){
                await updateDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      content: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
                await updateDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      content: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
              }
              else{
                await setDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      contenido: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
                await setDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      contenido: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
              }
            });
        }
        );
    }catch(err){
        console.log(err);
    }

    }
}

  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <div className='Form_TextBar'>
              
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" onChange={e=>setText(e.target.value)} value={text} id="textId"/>
            
                <button className='Button_SendMassage' onClick={sendMessage}></button>    

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage" ></label>
                <input type="file" className='Input_File' onChange={sendImage} id="Id_Labe_UploadImage" />
                <button className='Button_SendLocation'></button>
            </div>
        </div>
    </div>
  )
}

export default TextBar