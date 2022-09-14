
// import React from 'react';
import '../Hojas-de-estilo/LoginForm.css';

function LoginForm() {
    return (
        <div className='ContainerLogin'>
            <div className='BoxImgPage'><img src="" alt="" /></div>
            <form>
                <div className='BoxTitle'>
                    <h2 className='TitleText'>Inicar secion</h2>
                </div>
                <div className='DataLoginBox'>
                    <label htmlFor="InpLogInMail">Correo electronico</label>
                    <input className='InpStyle' placeholder='Correo electronico' type="email" name="" id="InpLogInMail" />
                    <label htmlFor="InpLogInPsw">Contraseña</label>
                    <input className='InpStyle' placeholder='Contraseña' type="password" name="" id="InpLogInPsw" />
                    <div className='TwoButtons'>
                        <input className='InpSubmit' type="submit" value="Ingresar" />
                        <a className='InpRegistrarse' href="http://">Registrase</a>
                    </div>
                </div>
            </form >
        </div>
    );
}
export default LoginForm