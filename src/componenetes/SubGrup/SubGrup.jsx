import React from 'react'
import { Link } from 'react-router-dom'
import './SubGrup.css'
function SubGrup() {
  return (
    <div className='Container_SubGrup'>
         <div className='Container_DeleteGrup'>
                <button className='Button_Delete'>X</button>
        </div>
        <Link className='Container_LinkSubGrup' to={'SubGrupo'}>
        <div className='Container_ImgSubGrup'>
            <img src={require('../../img/perro.jpg')} alt="" />
        </div>
        <div className='Container_NameSubGrup'>
                <p>Nombre de sub grupo</p>
        </div>
        </Link>
       
    </div>
  )
}

export default SubGrup