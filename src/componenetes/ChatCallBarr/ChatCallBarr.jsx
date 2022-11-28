import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import {db} from "../../firebase"
import './ChatCallBarr.css'

const ChatCallBarr = (props) => {
  const [userTo, setUserTo] = useState([]);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', props.userToUID), (doc) =>{
      setUserTo(doc.data());
    });
    return newUser
  }, [props.userToUID]);

  const [modalCall ,setModalCall]=useState(false);
    const toggleModalCall=()=>{
      setModalCall(!modalCall)
    }

    const [modalVideoCall ,setModalVideoCall]=useState(false);
    const toggleModalVideoCall=()=>{
      setModalVideoCall(!modalVideoCall)
    }


  return (
    <div className='Box_ChatCallBarr'>
      {modalCall && (
            <div className='modal'>
            <div className='overlay'></div>
            <div className='modal_contentCall'>
           
            <h2 className='TitleText' >LLamada en curso</h2>
          
                <div  className='Container_UserCallOption' >
                  <div className='Container_Call'>
                    <div className='Image_User' >
                       <img src={userTo.photoURL} alt="" />
                    </div>
                    <p>{userTo.UserName}</p>
                  </div>
                  <div className='Container_CallOption'>
                  <button
                    className='Button_Mute'>
                    </button>
                  <button  className='Button_HangUp'
                    onClick={toggleModalCall}>

                  </button>
                  </div>
                </div>
            
            </div>
        </div>
      )}
      {modalVideoCall && (
                  <div className='modal'>
                  <div className='overlay'></div>
                  <div className='modal_contentVideoCall'>
                  <h2 className='TitleText' >Video llamada en curso</h2>
                    <div  className='Container_UserCallOption' >
                    <div className='Container_Call'>
                      <div className='Image_User' >
                        <img src={userTo.photoURL} alt="" />
                      </div>
                      <p>{userTo.UserName}</p>
                    </div>
                    <div className='Container_CallOption'>
                      <button
                        className='Button_Mute'>
                        </button>
                      <button  className='Button_HangUpVideoCall'
                        onClick={toggleModalVideoCall}>

                      </button>
                    </div>
                </div>
                  </div>
              </div>
            )}

        <div className='UserNameChat_BoxImage'>
            <div className='ImgChatUser'>
                  <img  src={userTo.photoURL} alt="UserImage"  />
            </div>
            <div className='UserNameChat'>
                <p>{userTo.UserName}</p>
            </div>
            {

              userTo.isUserActive == true ?
              <p className="IsActiveText">Activo</p>
              :
              <p>No Activo</p>
            }

        </div>
            
             <div className='Box_Buttons_ChatCallBarr'>
            <button  onClick={toggleModalCall} className='Button_Call'> </button>
            <button onClick={setModalVideoCall} className='Button_VideoChat'> </button>
            </div>

    </div>
  )
}

export default ChatCallBarr