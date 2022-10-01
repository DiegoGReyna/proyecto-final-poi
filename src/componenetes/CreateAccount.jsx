
import '../Hojas-de-estilo/CreateAccount.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function CreateAccount() {

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
                            <label htmlFor="Id_SelectCarrera">Carrera</label>
                            <Form.Select className='Custom_Select'  id='Id_SelectCarrera' size='lg'>
                            <option value="0">Seleccione una carrera</option>
                                <option value="1">LMAD</option>
                                <option value="2">LCC</option>
                            </Form.Select>
                        </div>
                        <div className="ContainerImgCreateAccount">
                            <div className="BoxImageCreateAccout">


                            </div>
                            <label className="labelFileUploaed" htmlFor="InptFileCreateAccount" >Imagen de perfil</label>
                            <input className="InpFileStyle" type="file" name="" id="InptFileCreateAccount" />
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