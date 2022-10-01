import React,{useState} from 'react'
import './NavBarChats.css'
import PrivChatButton from '../PrivChatButton/PrivChatButton'
function NavBarChats() {

  const [modal ,setModal]=useState(false);
  const toggleModal=()=>{
    setModal(!modal)
  }
  return (
    <div className='Container_NavBarChats'>
      {modal && (
        <div className='modal'>
        <div className='overlay'></div>
        <div className='modal_content'>
          <div className='Container_CancelModal'>
            <button
            className='Button_Cancel'
              onClick={toggleModal}
            >X
            </button>
          </div>
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
      <PrivChatButton 
      userName="Nombre de usuario"
      imagen='perro'
      />
      <PrivChatButton 
      userName="usuario 1"
      imagen='perro_4'
      />
      
      <PrivChatButton 
       userName="usuario 2"
       imagen='perro_2'
       />
      <PrivChatButton 
       userName="usuario 3"
       imagen='perro_3'
      />
      <PrivChatButton 
       userName="usuario 4"
       imagen='perro_2'
      />
      
      </div>
    </div>
  )
}

export default NavBarChats