import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {db} from "../../firebase"

import PrivChatButton from '../PrivChatButton/PrivChatButton'
import { useRef } from "react";
import './NavBarChats.css'
const NavBarChats = () => {
  const ChatNav =useRef();
 
  const [chats, setChats] = useState([]);
    const {currentUser} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    useEffect(() =>{
      const newChat = onSnapshot(collection(db, 'users'), (snapshot) =>{
      setChats(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
      return newChat
    }, [currentUser.uid]);

 
    const navRef =useRef();
    const showNavBar =()=>{
        navRef.current.classList.toggle("PleasWork");
        
    }
  return (
    <header className='Container_NavBarChats'>
      <nav  className="NavChatsPriv"  ref={navRef}>
      <div  className='nav-button button-close' >
            <button 
              onClick={showNavBar}
             
             >
             <span className="material-symbols-outlined">
                        close
                        </span>
            </button>
            </div>

          <div className='Container_ChatsButtons'>

          {/*Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
                  <div>{chat[1].UserName}</div>
          ))*/}

          {
            chats.map(chat => 
              chat.uid != currentUser.uid ?
              <PrivChatButton onClick={showNavBar}
              userName={chat.UserName}
              imagen={chat.photoURL}
              uid ={chat.uid}
              />
              : null
              )
          }
         


          </div>
          
      </nav>
      <div className='Container_Button'>
            <button 
               onClick={showNavBar}
              className='nav-button'>
              Agregar chat
            </button>
          </div>

          </header> 
  )
}

export default NavBarChats