
import React,{useState}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Hojas-de-estilo/LoginForm.css';

function LoginForm() {
    const [UserEmail,setUserEmail]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/UserPage')
       
        console.log(`${UserEmail},${UserPassword}`);
    }
    return (
        <div className='ContainerLogin'>
            {/* <div className='BoxImgPage'><img src="" alt="" /></div> */}
            <form onSubmit={handleSubmit}>
                <div className='BoxTitle'>
                    <h2 className='TitleText'>Inicar sesión</h2>
                </div>
                <div className='DataLoginBox'>
                    <label htmlFor="InpLogInMail">Correo electronico</label>
                    <input className='InpStyle' 
                        placeholder='Correo electronico' 
                        type="email" 
                        name="" 
                        id="InpLogInMail"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        value={UserEmail}
                     />
                    <label htmlFor="InpLogInPsw">Contraseña</label>
                    <input className='InpStyle' 
                        placeholder='Contraseña' 
                        type="password"
                        name="" 
                        id="InpLogInPsw" 
                        onChange={(e)=>setUserPassword(e.target.value)}
                        value={UserPassword}
                    />
                    <div className='TwoButtons'>
                        {/* <a className='InpRegistrarse' href="http://">Registrase</a> */}
                        <Link className='InpRegistrarse' to="/CrearCueanta">Registrase</Link>
                        <input className='InpSubmit' type="submit" value="Ingresar" />
                    </div>
                </div>
            </form >
        </div>
    );
}
export default LoginForm