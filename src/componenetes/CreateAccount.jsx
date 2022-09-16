import React, { useState } from "react";
import '../Hojas-de-estilo/CreateAccount.css';


function CreateAccount() {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);

            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
            console.log("Arhivo no soportado")
        }
    };

    return (
        <div>
            <div className='ContainerCreatAccount'>

                <form>
                    <div className='BoxTitle'>
                        <h2 className='TitleText'>Crear cueanta</h2>
                    </div>
                    <div className='DataCreateAccountBox'>
                        <div className="ContainerInfoCreateAccount">
                            <label htmlFor="InpCreatAccUserName">Nombre de usuario</label>
                            <input className='InpStyle' placeholder='Nombre de usuario' type="text" name="" id="InpCreatAccUserName" />
                            <label htmlFor="InpCreatAccMail">Correo electronico</label>
                            <input className='InpStyle' placeholder='Correo electronico' type="email" name="" id="InpCreatAccMail" />
                            <label htmlFor="InpCreatAccPsw">Contraseña</label>
                            <input className='InpStyle' placeholder='Contraseña' type="password" name="" id="InpCreatAccPsw" />
                            <label htmlFor="InpCreatAccConfPsw">Confirmar contraseña</label>
                            <input className='InpStyle' placeholder='Contraseña' type="password" name="" id="InpCreatAccConfPsw" />
                        </div>
                        <div className="ContainerImgCreateAccount">
                            <div className="BoxImageCreateAccout"

                                style={{
                                    backgroundImage: imgPreview
                                        ? 'url("${imgPreview}")'
                                        : "#40A611"
                                }}
                            >


                            </div>
                            <label className="labelFileUploaed" htmlFor="InptFileCreateAccount" >Imagen de perfil</label>
                            <input className="InpFileStyle" type="file" name="" id="InptFileCreateAccount" onChange={handleImageChange} />
                        </div>
                    </div>

                    <div className='TwoButtons'>
                        <input className='InpSubmit' type="submit" value="Ingresar" />
                        <a className='InpRegistrarse' href="http://">Registrase</a>
                    </div>
                </form >
            </div >
        </div >
    );
}
export default CreateAccount