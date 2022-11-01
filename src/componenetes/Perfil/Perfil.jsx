import React from 'react'
import './Perfil.css'

export const Perfil = (props) => {
  return (
    <div className='TextoPerfil'>
      <div className='BoxPerfil'>
      <h2 className='PerfilText'>Perfil</h2>
      </div>
      <div className='ContainerPerfil'>
        <form>
          <div className='DataPerfilBox'>
          <label htmlFor="InpPerfilInMail">Correo electronico</label>
          <input className='InpStyle' type="email" placeholder={props.email} name="" id="" />

          <label htmlFor="InpLogInPsw">Contraseña</label>
          <input className='InpStyle' type="text" placeholder={props.password} name="" id="" />
          <button className='InpSubmit' type='Submit'>Editar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
