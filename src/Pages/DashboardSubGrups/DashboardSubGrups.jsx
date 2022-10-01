import React,{useState} from 'react'
import './DashboardSubGrups.css'
import SubGrup from '../../componenetes/SubGrup/SubGrup';

export default function DashboardSubGrups() {

    const [modal ,setModal]=useState(false);
    const toggleModal=()=>{
      setModal(!modal)
    }

    return (
        <div className='Container_DashBoardSubGrups'>
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
            <h2 className='TitleText' >Agregar subgrupo</h2>
            <form className='Form_Modal' action="">
                
                <label htmlFor="Id_Email_AgregarChat">Nombre de subgrupo</label>
                <input placeholder='Ingrese un nobre para el subgrupo' className='InpStyle' type="email" name="" id="Id_Email_AgregarChat" />
                <button  className='Button_Nav' 
                onClick={toggleModal}
                type="submit">Agregar subgrupo</button>

            </form>
            </div>
        </div>
      )}
            <div className='Box_DasBoardSubGrups'>
                    <div className='Box_Title'>
                        <h1>Subgrupos</h1>
                    </div>
                    <div className='Box_ButtonAgregarSubGrupo'>
                        <button  onClick={toggleModal} className='Button_AgregarSubGrupo'>Agregar subGrupo</button>
                    </div>
                    <div className='Container_Subgrupos'>
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                        <SubGrup />
                       
                        
                        
                        
                        
                    </div>

            </div>
           


        </div>


    )
}
