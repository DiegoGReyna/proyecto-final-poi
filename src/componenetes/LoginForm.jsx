
import React,{useState}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Hojas-de-estilo/LoginForm.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const  LoginForm = () => {
    const [UserEmail,setUserEmail]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
       
        try{
            await signInWithEmailAndPassword(auth, UserEmail, UserPassword);
            navigate('/UserPage');
        }catch(err){
            console.log(err);
            window.alert("Usuario o contraseña no existen");
        }
    }
    return (
        <div className='ContainerLogin'>
            <form onSubmit={handleSubmit}>
                <div className='BoxTitle'>
                    <h2 className='TitleText'>Iniciar sesión</h2>
                </div>
                <div className='DataLoginBox'>
                    <label htmlFor="InpLogInMail">Correo electrónico</label>
                    <input className='InpStyleLogIn' 
                        placeholder='Correo electronico' 
                        type="email" 
                        name="" 
                        id="InpLogInMail"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        value={UserEmail}
                     />
                    <label htmlFor="InpLogInPsw">Contraseña</label>
                    <input className='InpStyleLogIn' 
                        placeholder='Contraseña' 
                        type="password"
                        name="" 
                        id="InpLogInPsw" 
                        onChange={(e)=>setUserPassword(e.target.value)}
                        value={UserPassword}
                    />
                    <div className='TwoButtons'>
                        <input className='InpSubmit' type="submit" value="Ingresar" />
                        <Link className='InpRegistrarse' to="/CrearCuenta">Registrase</Link>
                    </div>
                </div>
            </form >
        </div>
    );
}
export default LoginForm