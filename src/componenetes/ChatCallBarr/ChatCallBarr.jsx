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
            <div className='Container_CancelModal'>
                <button
                className='Button_Cancel'
                onClick={toggleModalCall}
                >X
                </button>
            </div>
            <h2 className='TitleText' >LLamada</h2>
            <form className='Form_Modal' action="">
                
                
                <button  className='Button_Nav' 
                onClick={toggleModalCall}
                type="submit"></button>

            </form>
            </div>
        </div>
      )}

      {modalVideoCall && (
                  <div className='modal'>
                  <div className='overlay'></div>
                  <div className='modal_content'>
                  <div className='Container_CancelModal'>
                      <button
                      className='Button_Cancel'
                      onClick={toggleModalVideoCall}
                      >X
                      </button>
                  </div>
                  <h2 className='TitleText' >Video LLamada</h2>
                  <form className='Form_Modal' action="">
                      
                     
                      <button  className='Button_Nav' 
                      onClick={toggleModalVideoCall}
                      type="submit"></button>

                  </form>
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