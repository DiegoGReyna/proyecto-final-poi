import React, { useEffect, useState, useContext} from "react";
import'./MainGroupPostsPage.css'
import { TextBarMainGroup } from '../../componenetes/TextBarMainGroup/TextBarMainGroup'
import { RenderedPosts } from '../../componenetes/RenderedPosts/RenderedPosts'
import { AuthContext } from "../../context/AuthContext";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore,onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export const MainGroupPostsPage = () => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  return (
    <div className='Container_MainGroupPostsPage'>
       <div className='tilte_Page'>
            <h1>Bienvenido al grupo {user.UserCarrera}</h1>
       </div>
    <RenderedPosts />
    <TextBarMainGroup />
    </div>
  )
}
