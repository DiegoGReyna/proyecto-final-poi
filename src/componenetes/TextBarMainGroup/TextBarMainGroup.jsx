import React, { useEffect, useState, useContext} from "react";
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import './TextBarMainGroup.css'
import { AuthContext } from "../../context/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore,onSnapshot } from "firebase/firestore";


export const TextBarMainGroup = () => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);
  const [text, setText] = useState("");
  const geolocationAPI = navigator.geolocation;
  const [error, setError] = useState(null);

    useEffect(() =>{
        const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
          setUser(doc.data());
        });
        return newUser
      }, [currentUser.uid]);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  const sendMessage = async () => {
    var _date = new Date().toISOString().slice(0, 10);
    if(text != ""){
      await updateDoc( doc(db, "carreras", user.UserCarrera), {
        posts: arrayUnion({
            id: uuid(),
            postContent: text,
            posterId: user.uid,
            posterName: user.UserName,
            datePost: _date,
            posterImage: user.photoURL,
            postType: 1
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
        const storageRef = ref(storage, `/postsImages/${user.UserCarrera}/${uuid()}`);
        var userToUpdate = doc(db, "carreras", user.UserCarrera);
        const uploadTask = uploadBytesResumable(storageRef, selected);
        uploadTask.on(
            (error) => {
                //setErr(true);
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              var _date = new Date().toISOString().slice(0, 10);
                await updateDoc(userToUpdate, {
                  posts: arrayUnion({
                    id: uuid(),
                    postContent: downloadURL,
                    posterId: user.uid,
                    posterName: user.UserName,
                    datePost: _date,
                    posterImage: user.photoURL,
                    postType: 2
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
        const storageRef = ref(storage, `/postsFiles/${user.UserCarrera}/${uuid()}`);
        var userToUpdate = doc(db, "carreras", user.UserCarrera);
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
                  posts: arrayUnion({
                    id: uuid(),
                    postContent: downloadURL,
                    posterId: user.uid,
                    posterName: user.UserName,
                    datePost: _date,
                    posterImage: user.photoURL,
                    postType: 3
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
        await updateDoc( doc(db, "carreras", user.UserCarrera), {
          posts: arrayUnion({
              id: uuid(),
              postContent: coordinates,
              posterId: user.uid,
              posterName: user.UserName,
              datePost: _date,
              posterImage: user.photoURL,
              postType: 4
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
                <input type="file" className='Input_File' onChange={sendImage} id="Id_Labe_UploadImage" />

                <button className='Button_SendLocation' onClick={getUserCoordinates}></button>
              </div>

            </div>
        </div>
    </div>
  )
}

