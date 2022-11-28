import React, { useEffect, useState, useContext} from "react";
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
    }
     
  }

  const sendImage = async (e) => {
    console.log("Uploading");
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

