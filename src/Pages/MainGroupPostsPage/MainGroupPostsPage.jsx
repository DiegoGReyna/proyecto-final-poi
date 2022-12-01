import React, { useEffect, useState, useContext} from "react";
import'./MainGroupPostsPage.css'
import { TextBarMainGroup } from '../../componenetes/TextBarMainGroup/TextBarMainGroup'
import { RenderedPosts } from '../../componenetes/RenderedPosts/RenderedPosts'
import { AuthContext } from "../../context/AuthContext";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore,onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { propTypes } from "react-bootstrap/esm/Image";

export const MainGroupPostsPage = (props) => {
  const {currentUser} = useContext(AuthContext);  
  const [user, setUser] = useState([]);


  return (
    <div className='Container_MainGroupPostsPage'>
       <div className='tilte_Page'>
            <h1>Bienvenido al grupo {props.carrera}</h1>
       </div>
    <RenderedPosts 
    carrera= {props.carrera}/>
    <TextBarMainGroup />
    </div>
  )
}