import { onSnapshot, doc, collection, updateDoc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState, useContext, useRef} from "react";
import { AuthContext } from "../../context/AuthContext";
import {db} from "../../firebase";
import { v4 as uuid } from "uuid";
import './ChatCallBarr.css'

const ChatCallBarr = (props) => {
  const [userTo, setUserTo] = useState([]);
  const [user, setUser] = useState([]);
  const [meeting, setMetting] = useState([]);

  const [modalVideoCall ,setModalVideoCall]=useState(false);
  const [modalCall ,setModalCall]=useState(false);
  const {currentUser} = useContext(AuthContext);
  
  const chatUser =  currentUser.uid + "-" + userTo.uid;
  var chatUserTo =  userTo.uid + "-" + currentUser.uid;
  const toUpdateSender = doc(db, "meetings", chatUser);
  const toUpdateReciver = doc(db, "meetings", chatUserTo);

  var video = useRef(null);
  var friendsVideo = useRef(null);
  var uid = Math.floor(Math.random()*1000000000);

  var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}, {'urls': 'turn:numb.viagenie.ca','credential': 'beaver','username': 'webrtc.websitebeaver@gmail.com'}]};
  var pc = new RTCPeerConnection(servers);
  pc.onicecandidate = (async (event) => await event.candidate?sendMeeting(uid,JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
  pc.onaddstream = (event => friendsVideo.srcObject = event.stream);
  


  const sendMeeting = async (uid,data) => {
    console.log(data);
      const coll = collection(db, "meetings");
      const docSnap = await getDoc(doc(coll, chatUser));
      if(docSnap._document == null){
        await setDoc(toUpdateSender, {
            id: uid,
            info : data,
        })
        await setDoc(toUpdateReciver, {
            id: uid,
            info : data,
        })
      }
      else{
        await updateDoc(toUpdateSender, {
          id: uid,
          info : data,
      })
      await updateDoc(toUpdateReciver, {
          id: uid,
          info : data,
      })
      }
  }

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', props.userToUID), (doc) =>{
      setUserTo(doc.data());
    });
    return newUser
  }, [props.userToUID]);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  
    const toggleModalCall=()=>{
      setModalCall(!modalCall)
    }

    const openVideoCall=async()=>{
      setModalVideoCall(true);
      let stream = null;
      stream = await navigator.mediaDevices.getUserMedia({audio:true, video:true})
      video.current.srcObject = stream;
      video.current.muted = true;
    }

    const callM =async ()=>{
      await pc.createOffer()
      .then(offer => pc.setLocalDescription(offer) )
      .then(async () => 
      sendMeeting(uid, JSON.stringify({'sdp': pc.localDescription})));
    } 
    
    const toggleModalVideoCall= async ()=>{
      setModalVideoCall(false);
      navigator.mediaDevices.stop();
    }

    const readMeeting = async (data) => {
      if(data != undefined && data.info != data.id){
        var msg = JSON.parse(data.info);
        console.log(msg);
        var sender = data.id;
        if (sender != uid) {
            if (msg.ice != undefined)
                await pc.addIceCandidate(new RTCIceCandidate(msg.ice));
            else if (msg.sdp.type == "offer")
                await pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
                  .then(() => pc.createAnswer())
                  .then(answer => pc.setLocalDescription(answer))
                  .then(async () => await sendMeeting(uid, JSON.stringify({'sdp': pc.localDescription})));
            else if (msg.sdp.type == "answer")
                await pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
      }
  };

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'meetings', chatUser), (doc) =>{
      setMetting(doc.data());
      readMeeting(doc.data());
    });
    return newUser
  }, 5000);

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
                        <div>
                          <video ref={video} id="yourVideo" autoPlay muted playsInline></video>
                          <p>{user.UserName}</p>
                        </div>
                        <div>
                          <video ref={friendsVideo} id="friendsVideo" autoPlay playsInline></video>
                          <p>{userTo.UserName}</p>
                          </div>
                      </div>
                    <div className='Container_CallOption'>
                      <button
                        className='Button_Mute' onClick={callM}>
                          
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
            <button onClick={toggleModalCall} className='Button_Call'> </button>
            <button onClick={openVideoCall} className='Button_VideoChat'> </button>
            </div>

    </div>
  )
}

export default ChatCallBarr