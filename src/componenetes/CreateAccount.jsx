import React,{useState} from 'react';
import '../Hojas-de-estilo/CreateAccount.css';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const CreateAccount = () => {
    const [UserEmail,setUserEmail]=useState("");
    const [UserPassword,setUserPassword]=useState("");
    const [UserName,setUserName]=useState("");
    const [UserCarrera,setUserCarrera]=useState("");
    const [imgPreview,setImgPreview]=useState(null);
    const [img,setImg]=useState(null);
    const [error,setError]=useState(false);

    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(UserName != "" && UserEmail != "" && UserCarrera != "" && UserPassword != "" && img != null){
                const res = await createUserWithEmailAndPassword(auth, UserEmail, UserPassword);
                
                const uid = res.user.uid;
                const storageRef = ref(storage, `/profileImage/${uid}`);
                const uploadTask = uploadBytesResumable(storageRef, img);

                uploadTask.on(
                    (error) => {
                        //setErr(true);
                    },
                    () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await setDoc(doc(db, "users", res.user.uid),{
                            uid: res.user.uid,
                            isUserActive : true,
                            UserName,
                            UserEmail,
                            UserCarrera : UserCarrera,
                            photoURL : downloadURL
                        });
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate('/UserPage');
                    });
                }
                );
            }
            else{
                window.alert("Favor de llenar todos los campos");
            }
        }catch(err){
            console.log(err);
            window.alert("Ocurrio un error correo no valido o en uso");
        }
    }

    const handleImageChange=(e)=>{
        const selected=e.target.files[0];
        const allowed_types=["image/png","image/jpeg","image/jpg"];
        if(selected&&allowed_types.includes(selected.type)){
            let reader=new FileReader();
            reader.onloadend=()=>{
                setImg(e.target.files[0]);
                setImgPreview(reader.result);
            }
            reader.readAsDataURL(selected);
        }else{
            setError(true)
            console.log("tipo de archivo no aceptado")
        }
    }

    const handleChange = event => {
        setUserCarrera(event.target.value);
    };

    return (
        <div>
            <div className='ContainerCreatAccount'>

                <form onSubmit={handleSubmit} >
                    <div className='BoxTitle'>
                        <h2 className='TitleText'>Crear cuenta</h2>
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
                            onChange={(e)=>setUserName(e.target.value)}
                            value={UserName}
                            />
                            <label htmlFor="InpCreatAccMail">Correo electrónico</label>
                            <input className='InpStyle' placeholder='Correo electrónico' type="email" name="" id="InpCreatAccMail" 
                            onChange={(e)=>setUserEmail(e.target.value)}value={UserEmail}/>
                            <label htmlFor="InpCreatAccPsw">Contraseña</label>
                            <input className='InpStyle' placeholder='Contraseña' type="password" name="" id="InpCreatAccPsw" 
                            onChange={(e)=>setUserPassword(e.target.value)}  value={UserPassword}/>
                            <label htmlFor="Id_SelectCarrera">Carrera</label>
                            <Form.Select className='Custom_Select' id='Id_SelectCarrera' size='lg' value={UserCarrera}  onChange={handleChange}>
                                <option value="0">Seleccione una carrera</option>
                                <option value="LMAD">LMAD</option>
                                <option value="LCC">LCC</option>
                                <option value="LSTI">LSTI</option>
                                <option value="LM">LM</option>
                                <option value="LA">LA</option>
                                <option value="LF">LF</option>

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