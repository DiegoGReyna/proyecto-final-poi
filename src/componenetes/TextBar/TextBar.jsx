import React from 'react'
import './TextBar.css'
function TextBar() {
  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <form className='Form_TextBar' action="">
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" />
            
                <button className='Button_SendMassage' type="submit"></button>    

                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input id="Id_Labe_UploadFile" className='Input_File' type="file" name=""/>

                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage"></label>
                <input type="file" className='Input_File' name="" id="Id_Labe_UploadImage" />
                <button className='Button_SendLocation'></button>
            </form>
        </div>
    </div>
  )
}

export default TextBar