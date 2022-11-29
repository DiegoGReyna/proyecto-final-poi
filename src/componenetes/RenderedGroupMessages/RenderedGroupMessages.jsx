import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import './RenderedGroupMessages.css'
import MessagesFromOthers from '../MessagesFromOthersGroup/MessagesFromOthersGroup';
import MessaByUser from '../MessaByUser/MessaByUser';
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";

const RenderedGroupMessages = (props) => {
    const [messages, setMessages] = useState([]);
    const {currentUser} = useContext(AuthContext);

      useEffect (() => {
        const unSub = onSnapshot(doc(db, "groupMessages", props.groupId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unSub()
        }
    }, [props.groupId])


    return (
        <div className='Container_RenderedMessages'>
            <div className='box_Messages'>
                
            {
                messages != null ?
                messages.map(message => 
                    message.senderId == currentUser.uid ?
                    <MessaByUser 
                    sendedTime={message.dateMessage}
                    content={message.messageContent}
                    messageType={message.messageType}
                    />
                    : 
                    <MessagesFromOthers
                    userName={message.senderName}
                    sendedTime={message.dateMessage}
                    content={message.messageContent}
                    messageType={message.messageType}
                    />
                )
                :
                null
            }

            </div>
            
        </div>
    );
}
export default RenderedGroupMessages