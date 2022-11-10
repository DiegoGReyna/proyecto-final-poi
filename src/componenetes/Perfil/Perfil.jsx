import React from 'react'
import './Perfil.css'

export const Perfil = (props) => {
  return (
    <div className='TextoPerfil'>
      <div className='BoxPerfil'>
      <h2 className='PerfilText'>Perfil</h2>
      </div>
      <div className='ContainerPerfil'>
        <form className='FormPerfil'>
          <div className='ContainerImgPerf'>
            <img src={props.ImgPerfil} alt="" />
          </div>
          <div className='DataPerfilBox'>
          <label htmlFor="InpPerfilInMail">Correo electronico</label>
          <input  className='InpStyle' type="email" defaultValue={props.email} name="" id="" />

          <label htmlFor="InpLogInPsw">Contraseña</label>
          <input    className='InpStyle' type="password" defaultValue={props.psw} name="" id="" />

          <button className='InpSubmit' type='Submit'>Editar</button>
          
          </div>
        </form>
      </div>
    </div>
  )
}
