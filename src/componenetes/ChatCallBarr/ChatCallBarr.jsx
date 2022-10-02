import React,{useState} from 'react'
import './ChatCallBarr.css'
function ChatCallBarr() {

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
            <div className='modal_content'>
           
            <h2 className='TitleText' >LLamada en curso</h2>
          
                <div  className='Container_UserCallOption' >
                  <div className='Container_Call'>
                    <div className='Image_User' >
                       <img src={require('../../img/perro.jpg')} alt="" />
                    </div>
                    <p>Nombre de usuario</p>
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
                  <div className='modal_content'>
                  <h2 className='TitleText' >Video llamada en curso</h2>
                    <div  className='Container_UserCallOption' >
                    <div className='Container_Call'>
                      <div className='Image_User' >
                        <img src={require('../../img/perro.jpg')} alt="" />
                      </div>
                      <p>Nombre de usuario</p>
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
                    <img  src={require('../../img/perro.jpg')} alt="UserImage"  />
            </div>
            <div className='UserNameChat'>
                <p>Nombre de usuario</p>
            </div>
        </div>
        <div className='Box_Buttons_ChatCallBarr'>
            <button  onClick={toggleModalCall} className='Button_Call'> </button>
            <button onClick={setModalVideoCall} className='Button_VideoChat'> </button>
        </div>
    </div>
  )
}

export default ChatCallBarr