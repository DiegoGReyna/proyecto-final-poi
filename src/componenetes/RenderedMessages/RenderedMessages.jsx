import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
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
    const [userTo, setUserTo] = useState([]);

    useEffect(() =>{
        const newUser = onSnapshot(doc(db, 'users', userToUID), (doc) =>{
          setUserTo(doc.data());
        });
        return newUser
      }, [userToUID]);

      useEffect (() => {
        const unSub = onSnapshot(doc(db, "chats", chatUser), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        })

        return () => {
            unSub()
        }
    }, [userToUID])

    return (
        <div className='Container_RenderedMessages'>
            <div className='box_Messages'>
            {
                messages.map(message => 
                    message.senderId == currentUser.uid ?
                    <MessaByUser 
                    sendedTime={message.date}
                    content={message.messageContent}
                    messageType={message.messageType}
                    />
                    : 
                    <MessagesFromOthers 
                    userName={userTo.UserName}
                    sendedTime={message.date}
                    content={message.messageContent}
                    userImage={userTo.photoURL}
                    messageType={message.messageType}
                    />
                )
            }
                
            </div>
            
        </div>
    );
}
export default RenderedMessages