import React, { useEffect, useState, useContext} from "react";
import './TextBarGroup.css'
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore,onSnapshot } from "firebase/firestore";

const TextBarGroup = (props) => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  const [ text, setText ] = useState("");
  const geolocationAPI = navigator.geolocation;
  const [error, setError] = useState(null);


  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  const sendMessage = async () => {
    if(text != ""){
      var _date = new Date().toISOString().slice(0, 10);
      await updateDoc(doc(db, "groupMessages", props.groupId), {
        messages: arrayUnion({
            id: uuid(),
            messageContent: text,
            messageType:1,
            senderId: currentUser.uid,
            senderName: user.UserName,
            dateMessage: _date,
        }),
      });
      document.getElementById("textId").value = "";
      setText("");
    }
     
  }

  const sendImage = async (e) => {
    const selected=e.target.files[0];
    const allowed_types=["image/png","image/jpeg","image/jpg"];
    if(selected&&allowed_types.includes(selected.type)){
       try{        
        const storageRef = ref(storage, `/groupsImages/${props.groupId}/${uuid()}`);
        var userToUpdate = doc(db, "groupMessages", props.groupId);
        const uploadTask = uploadBytesResumable(storageRef, selected);
        uploadTask.on(
            (error) => {
                //setErr(true);
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              var _date = new Date().toISOString().slice(0, 10);
                await updateDoc(userToUpdate, {
                  messages: arrayUnion({
                    id: uuid(),
                    messageContent: downloadURL,
                    messageType: 2,
                    senderId: currentUser.uid,
                    senderName: user.UserName,
                    dateMessage: _date,
                }),
                });
            });
        }
        );
      }catch(err){
          console.log(err);
      }
      }
  }
  
  const sendFile = async (e) => {
    const selected=e.target.files[0];
      const allowed_types="application/pdf";
      if(selected&&allowed_types == selected.type){
       try{        
        const storageRef = ref(storage, `/groupsFiles/${props.groupId}/${uuid()}`);
        var userToUpdate = doc(db, "groupMessages", props.groupId);
        const uploadTask = uploadBytesResumable(storageRef, selected);
        uploadTask.on(
          "state_changed",
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
              var _date = new Date().toISOString().slice(0, 10);
                await updateDoc(userToUpdate, {
                  messages: arrayUnion({
                    id: uuid(),
                    messageContent: downloadURL,
                    messageType: 3,
                    senderId: currentUser.uid,
                    senderName: user.UserName,
                    dateMessage: _date,
                }),
                });
            });
        }
        );
      }catch(err){
          console.log(err);
      }
      }
  }

  const getUserCoordinates = async () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      await geolocationAPI.getCurrentPosition( async (position) => {
        const { coords } = position;
        var _date = new Date().toISOString().slice(0, 10);
        var coordinates = "https://maps.google.com/?q=" + coords.latitude + "," + coords.longitude;
        await updateDoc(doc(db, "groupMessages", props.groupId), {
          messages: arrayUnion({
            id: uuid(),
            messageContent: coordinates,
            messageType: 4,
            senderId: currentUser.uid,
            senderName: user.UserName,
            dateMessage: _date,
        }),
        });
              
      }, (error) => {
        setError('Something went wrong getting your position!')
        window.alert(error);
      })
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
                

                
                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input type="file" className='Input_File' onChange={sendFile} id="Id_Labe_UploadFile"/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage" ></label>
                <input type="file" className='Input_File'onChange={sendImage} id="Id_Labe_UploadImage" />

                <button className='Button_SendLocation' onClick={getUserCoordinates}></button>


              </div>
            </div>
        </div>
    </div>
  )
}

export default TextBarGroup