import React, { useEffect, useState, useContext} from "react";
import './TextBarMainGroup.css'
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import { arrayUnion, doc, collection, Timestamp, updateDoc, getDoc, setDoc, firestore, query, where,getCountFromServer } from "firebase/firestore";


export const TextBarMainGroup = () => {
  return (
    <div className='Container_TextBar'>
        <div className='Box_TextBar'>
            <div className='Form_TextBar'>
              <div className="ContainerInputTextSendMessage">
                <input placeholder='Escribe un mensaje' className='Input_Text' type="text" id="textId"/>
                <button className='Button_SendMassage' ></button> 

                </div>   
              <div className="ContainerSendFilesImgs">
                <label className="Labe_UploadFile" htmlFor="Id_Labe_UploadFile"></label>
                <input id="Id_Labe_UploadFile" className='Input_File' type="file" name=""/>
                <label className="Labe_UploadImage" htmlFor="Id_Labe_UploadImage"></label>
                <input type="file" className='Input_File' name="" id="Id_Labe_UploadImage" />
                <button className='Button_SendLocation'></button>
              </div>

            </div>
        </div>
    </div>
  )
}

