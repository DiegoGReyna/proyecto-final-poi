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
              messageContent: text,
              senderId: currentUser.uid,
              date: _date,
          }),
        });
        await updateDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              messageContent: text,
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
              messageContent: text,
              senderId: currentUser.uid,
              date: _date,
          })
        });
        await setDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              messageContent: text,
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
              if(docSnap._document != null){
                await updateDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      messageContent: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
                await updateDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      messageContent: downloadURL,
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
                      messageContent: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
                await setDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      messageContent: downloadURL,
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
      else{
        window.alert("Archivo no valido");
      }
  }

const sendFile = async (e) => {
    const selected=e.target.files[0];
    const allowed_types="application/pdf";
    if(selected&&allowed_types == selected.type){
       try{        
        const storageRef = ref(storage, `/individualChatsFiles/${uuid()}`);
        const uploadTask = uploadBytesResumable(storageRef, selected);
        console.log("Before");
        uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("Inside");
            var _date = new Date().toISOString().slice(0, 10);
              const coll = collection(db, "chats");
              const docSnap = await getDoc(doc(coll, chatUser));
              if(docSnap._document != null){
                await updateDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 3,
                      messageContent: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
                await updateDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 3,
                      messageContent: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
              }
              else{
                await setDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 3,
                      messageContent: downloadURL,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
                await setDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 3,
                      messageContent: downloadURL,
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
      else{
        window.alert("Archivo no valido");
      }
  }

  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <div className='Form_TextBar'>
              
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" onChange={e=>setText(e.target.value)} value={text} id="textId"/>
            
                <button className='Button_SendMassage' onClick={sendMessage}></button>    

                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input type="file" className='Input_File' onChange={sendFile} id="Id_Labe_UploadFile"/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage" ></label>
                <input type="file" className='Input_File' onChange={sendImage} id="Id_Labe_UploadImage" />

                <button className='Button_SendLocation'></button>
            </div>
        </div>
    </div>
  )
}

export default TextBar