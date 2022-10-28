import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import './RenderedMessages.css'
import MessagesFromOthers from '../MessagesFromOthers/MessagesFromOthers';
import MessaByUser from '../MessaByUser/MessaByUser';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";

const RenderedMessages = () => {
    const [messages, setMessages] = useState([]);
    const location = useLocation();
    const { userToUID } = location.state;
    const {currentUser} = useContext(AuthContext);
    var chatUser = currentUser.uid + "-" + userToUID;

    /*useEffect(() =>{
        const newMessage = onSnapshot(collection(db, 'chats'), (snapshot) =>{
            setMessages(snapshot.docs.map(doc => ({...doc.data(), id: chatUser})));
            console.log(messages[0].messages[0].text);
            });
        return newMessage
      }, [chatUser]);*/

      useEffect (() => {
        const unSub = onSnapshot(doc(db, "chats", chatUser), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unSub()
        }
    }, [chatUser])

    return (
        <div className='Container_RenderedMessages'>
            <div className='box_Messages'>
            {
                messages.map(message => 
                    message.senderId == currentUser.uid ?
                    <MessaByUser 
                    sendedTime="2:35pm"
                    text={message.text}
                    />
                    : 
                    <MessagesFromOthers 
                    userName="Nombre de usuario"
                    sendedTime="2:30pm"
                    text={message.text}
                    userImage="perro"
                    />
                )
            }
                
            </div>
            
        </div>
    );
}
export default RenderedMessages