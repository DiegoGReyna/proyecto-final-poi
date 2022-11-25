import React, { useEffect,  useState, useContext} from "react";
import './Perfil.css'
import { AuthContext } from "../../context/AuthContext";
import { db, storage } from "../../firebase";
import { onSnapshot, doc, collection, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Perfil = () => {
  const {currentUser} = useContext(AuthContext);
  const [user, setUser] = useState([]);
  const [imgPreview,setImgPreview]=useState(null);
  const [img,setImg]=useState(null);
  const [error,setError]=useState(false);
  var isActive;
  
  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
      document.getElementById('id_Active').checked = user.isUserActive;
      isActive = user.isUserActive;
    });
    return newUser
  }, [currentUser.uid, user.isUserActive]);

  const updateUser = async () => {
    
    if (document.getElementById('id_Active').checked){
        isActive = true;
    }
    else{
      isActive = false;
    }
    var userToUpdate = doc(db, "users", user.uid);
    if(img != null){
      const storageRef = ref(storage, `/profileImage/${user.uid}`);
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
            //setErr(true);
        },
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(userToUpdate, {
                isUserActive: isActive,
                photoURL : downloadURL
            });
        });
    }
    );
    }
    else{
      await updateDoc(userToUpdate, {
        isUserActive: isActive
      });
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

  return (
    <div className='TextoPerfil'>
      <div className='BoxPerfil'>
      <h2 className='PerfilText'>Perfil</h2>
      </div>
      <div className='ContainerPerfil'>
        <div className='FormPerfil'>
          <div className="ContainerImgPerf">
              {error && <p>File not supported</p>}
              {imgPreview != null ?
              <div 
              style={{
                  background:imgPreview
                  ?`url("${imgPreview}") no-repeat center/cover`
                  :`url(../img/perro.jpg) no-repeat center/cover`
              }} className="BoxImageCreateAccout">
              </div>
              :
              <div 
              style={{
                  background:user.photoURL
                  ?`url("${user.photoURL}") no-repeat center/cover`
                  :`url(../img/perro.jpg) no-repeat center/cover`
              }} className="BoxImageCreateAccout">
              </div>
              }
              <label className="labelFileUploaed" htmlFor="InptFileCreateAccount" >Imagen de perfil</label>
              <input  onChange={handleImageChange} className="InpFileStyle" type="file" name="" id="InptFileCreateAccount" />
          </div>
          <div className='DataPerfilBox'>
          <label htmlFor="InpPerfilInMail">Correo electronico</label>
          <input className='InpStyle' type="email" defaultValue={user.UserEmail} readOnly={true}/>

            <input type="checkbox" id="id_Active"/>
          <button className='InpSubmit' type='button' onClick={updateUser}>Editar</button>
          
          </div>
        </div>
      </div>
    </div>
  )
}
