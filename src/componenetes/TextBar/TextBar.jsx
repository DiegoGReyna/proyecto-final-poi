import React, {  useState, useContext, useEffect } from "react";
import './TextBar.css'
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {decode as base64_decode, encode as base64_encode} from 'base-64';

const TextBar = () => {
  const location = useLocation()
  const { userToUID } = location.state;
  const [ text, setText ] = useState("");
  var textEncrypt = "";

  const {currentUser} = useContext(AuthContext);
  const chatUser =  currentUser.uid + "-" + userToUID;
  var chatUserTo =  userToUID + "-" + currentUser.uid;
  const toUpdateSender = doc(db, "chats", chatUser);
  const toUpdateReciver = doc(db, "chats", chatUserTo);
  const [error, setError] = useState(null);

  const geolocationAPI = navigator.geolocation;

  const [isEncrypted, setIsEncrypted] = useState(null);

  const getUserCoordinates = async () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      await geolocationAPI.getCurrentPosition( async (position) => {
        const { coords } = position;
        var _date = new Date().toISOString().slice(0, 10);
        var coordinates = "https://maps.google.com/?q=" + coords.latitude + "," + coords.longitude;
          if (isEncrypted){
            textEncrypt = base64_encode(coordinates);
          }
          else{
            textEncrypt = coordinates;
          }
            const coll = collection(db, "chats");
            const docSnap = await getDoc(doc(coll, chatUser));
              if(docSnap._document != null){
                await updateDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 4,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
                await updateDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 4,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
              }
              else{
                await setDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 4,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
                await setDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 4,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
              }
      }, (error) => {
        setError('Something went wrong getting your position!')
        window.alert(error);
      })
    }
    document.getElementById('id_Active').checked = false;
      setIsEncrypted(false);
  }

  const sendMessage = async () => {
    if(text != ""){
      if (isEncrypted){
        textEncrypt = base64_encode(text);
      }
      else{
        textEncrypt = text;
      }
      var _date = new Date().toISOString().slice(0, 10);
      const coll = collection(db, "chats");
      const docSnap = await getDoc(doc(coll, chatUser));
      if(docSnap._document != null){
        await updateDoc(toUpdateSender, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              isMessageEncrypted: isEncrypted,
              messageContent: textEncrypt,
              senderId: currentUser.uid,
              date: _date,
          }),
        });
        await updateDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              isMessageEncrypted: isEncrypted,
              messageContent: textEncrypt,
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
              isMessageEncrypted: isEncrypted,
              messageContent: textEncrypt,
              senderId: currentUser.uid,
              date: _date,
          })
        });
        await setDoc(toUpdateReciver, {
          messages: arrayUnion({
              id: uuid(),
              messageType: 1,
              isMessageEncrypted: isEncrypted,
              messageContent: textEncrypt,
              senderId: currentUser.uid,
              date: _date,
          })
        });
      }
      document.getElementById("textId").value = "";
      setText("");
      document.getElementById('id_Active').checked = false;
      setIsEncrypted(false);
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

              if (isEncrypted){
                textEncrypt = base64_encode(downloadURL);
              }
              else{
                textEncrypt = downloadURL;
              }

              var _date = new Date().toISOString().slice(0, 10);
              const coll = collection(db, "chats");
              const docSnap = await getDoc(doc(coll, chatUser));
              if(docSnap._document != null){
                await updateDoc(toUpdateSender, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  }),
                });
                await updateDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
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
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
                      senderId: currentUser.uid,
                      date: _date,
                  })
                });
                await setDoc(toUpdateReciver, {
                  messages: arrayUnion({
                      id: uuid(),
                      messageType: 2,
                      isMessageEncrypted: isEncrypted,
                      messageContent: textEncrypt,
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
      document.getElementById('id_Active').checked = false;
      setIsEncrypted(false);
  }

  const sendFile = async (e) => {
      const selected=e.target.files[0];
      const allowed_types="application/pdf";
      if(selected&&allowed_types == selected.type){
        try{        
          const storageRef = ref(storage, `/individualChatsFiles/${uuid()}`);
          const uploadTask = uploadBytesResumable(storageRef, selected);
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

              if (isEncrypted){
                textEncrypt = base64_encode(downloadURL);
              }
              else{
                textEncrypt = downloadURL;
              }

                var _date = new Date().toISOString().slice(0, 10);
                const coll = collection(db, "chats");
                const docSnap = await getDoc(doc(coll, chatUser));
                if(docSnap._document != null){
                  await updateDoc(toUpdateSender, {
                    messages: arrayUnion({
                        id: uuid(),
                        messageType: 3,
                        isMessageEncrypted: isEncrypted,
                        messageContent: textEncrypt,
                        senderId: currentUser.uid,
                        date: _date,
                    }),
                  });
                  await updateDoc(toUpdateReciver, {
                    messages: arrayUnion({
                        id: uuid(),
                        messageType: 3,
                        isMessageEncrypted: isEncrypted,
                        messageContent: textEncrypt,
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
                        isMessageEncrypted: isEncrypted,
                        messageContent: textEncrypt,
                        senderId: currentUser.uid,
                        date: _date,
                    })
                  });
                  await setDoc(toUpdateReciver, {
                    messages: arrayUnion({
                        id: uuid(),
                        messageType: 3,
                        isMessageEncrypted: isEncrypted,
                        messageContent: textEncrypt,
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
        document.getElementById('id_Active').checked = false;
        setIsEncrypted(false);
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
                
                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input type="file" className='Input_File' onChange={sendFile} id="Id_Labe_UploadFile"/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage" ></label>
                <input type="file" className='Input_File' onChange={sendImage} id="Id_Labe_UploadImage" />

                <button className='Button_SendLocation' onClick={getUserCoordinates}></button>
                <input type="checkbox" id="id_Active" onChange={e=>setIsEncrypted(!isEncrypted)}/>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextBar