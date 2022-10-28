import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {db} from "../../firebase"
import './NavBarChats.css'
import PrivChatButton from '../PrivChatButton/PrivChatButton'

const NavBarChats = () => {
  const [modal ,setModal]=useState(false);
  const [chats, setChats] = useState([]);

    const {currentUser} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    useEffect(() =>{
      const newChat = onSnapshot(collection(db, 'users'), (snapshot) =>{
      setChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
      return newChat
    }, [currentUser.uid]);

  const toggleModal=()=>{
    setModal(!modal)
  }

  return (
    <div className='Container_NavBarChats'>
      {modal && (
        <div className='modal'>
        <div className='overlay'></div>
        <div className='modal_content'>
          <h2 className='TitleText' >Agregar chat</h2>
          <form className='Form_Modal' action="">
            
            <label htmlFor="Id_Email_AgregarChat">Correo electronico</label>
            <input placeholder='Ingrese un correo electronico' className='InpStyle' type="email" name="" id="Id_Email_AgregarChat" />
            <button  className='Button_Nav' 
            onClick={toggleModal}
            type="submit">Agregar a chat</button>

          </form>
        </div>
      </div>
      )}
      
      <div className='Container_Button'>
        <button 
          onClick={toggleModal}
          className='Button_Nav'>
          Agregar chat
        </button>
      </div>
      <div className='Container_ChatsButtons'>

      {/*Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
               <div>{chat[1].UserName}</div>
      ))*/}

      {
        chats.map(chat => 
          chat.uid != currentUser.uid ?
          <PrivChatButton 
          userName={chat.UserName}
          imagen={chat.photoURL}
          uid ={chat.uid}
          />
          : null
          )
      }
      


      </div>
    </div>
  )
}

export default NavBarChats