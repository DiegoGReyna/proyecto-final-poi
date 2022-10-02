

import React,{useState}from 'react';

import '../Hojas-de-estilo/CreateAccount.css';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';


function CreateAccount() {


    const [UserEmail,setUserEmail]=useState("");
    const [UserPassword,setUserPassword]=useState("");

    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/UserPage')
       
        console.log(`${UserEmail},${UserPassword}`);
    }


    const[imgPreview,setImgPreview]=useState(null);
    const[error,setError]=useState(false);
    const handleImageChange=(e)=>{
        const selected=e.target.files[0];
        const allowed_types=["image/png","image/jpeg","image/jpg"];
        if(selected&&allowed_types.includes(selected.type)){
            let reader=new FileReader();
            reader.onloadend=()=>{
                setImgPreview(reader.result);
                console.log(`${imgPreview}`)
            }
            reader.readAsDataURL(selected);
        }else{
            setError(true)
            console.log("tipo de archivo no asceptado")
        }
    }
    return (
        <div>
            <div className='ContainerCreatAccount'>

                <form onSubmit={handleSubmit} >
                    <div className='BoxTitle'>
                        <h2 className='TitleText'>Crear cueanta</h2>
                    </div>
                    <div className='DataCreateAccountBox'>
                        <div className="ContainerInfoCreateAccount">
                            <label htmlFor="InpCreatAccUserName">Nombre de usuario</label>
                            <input 
                            className='InpStyle' 
                            placeholder='Nombre de usuario' 
                            type="text" 
                            name="" 
                            id="InpCreatAccUserName" 
                            onChange={(e)=>setUserEmail(e.target.value)}
                            value={UserEmail}
                            />
                            <label htmlFor="InpCreatAccMail">Correo electronico</label>
                            <input className='InpStyle' placeholder='Correo electronico' type="email" name="" id="InpCreatAccMail" />
                            <label htmlFor="InpCreatAccPsw">Contraseña</label>
                            <input className='InpStyle' placeholder='Contraseña' type="password" name="" id="InpCreatAccPsw" />
                            <label htmlFor="InpCreatAccConfPsw">Confirmar contraseña</label>
                            <input 
                                className='InpStyle' 
                                placeholder='Contraseña' 
                                type="password" 
                                name="" 
                                id="InpCreatAccConfPsw"
                                onChange={(e)=>setUserPassword(e.target.value)}
                                value={UserPassword}/>
                            <label htmlFor="Id_SelectCarrera">Carrera</label>
                            <Form.Select className='Custom_Select'  id='Id_SelectCarrera' size='lg'>
                            <option value="0">Seleccione una carrera</option>
                                <option value="1">LMAD</option>
                                <option value="2">LCC</option>
                            </Form.Select>
                        </div>
                        <div className="ContainerImgCreateAccount">
                            {error && <p>File not supported</p>}
                            <div 
                            style={{
                                background:imgPreview
                                ?`url("${imgPreview}") no-repeat center/cover`
                                :`url(../img/perro.jpg) no-repeat center/cover`
                                
                            }} className="BoxImageCreateAccout">
                              
                                {/* <img src={require('../img/perro.jpg')} alt="" /> */}

                            </div>
                            <label className="labelFileUploaed" htmlFor="InptFileCreateAccount" >Imagen de perfil</label>
                            <input  onChange={handleImageChange} className="InpFileStyle" type="file" name="" id="InptFileCreateAccount" />
                        </div>
                    </div>

                    <div className='TwoButtons'>
                        <input className='InpSubmit' type="submit" value="Registrase" />
                        {/* <a className='InpRegistrarse' href="http://">Log in</a> */}

                        <Link className='InpRegistrarse' to="/">Log in</Link>
                    </div>
                </form >
            </div >
        </div >
    );
}
export default CreateAccount