import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import './RenderedPosts.css'
import MessagesFromOthers from '../MessagesFromOthers/MessagesFromOthers';
import MessaByUser from '../MessaByUser/MessaByUser';
import { useLocation } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { Post } from "../Post/Post";


export const RenderedPosts = () => {
  return (
    <div className='Container_RenderedPosts'>
    <div className='box_Posts'>
        <Post 
        Time={"0:27am"} 
        Date={"05/11/2022"}
        UserName={"Diego reyna"} 
        PostMessage={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolore voluptatem impedit et molestiae eum quisquam alias, reprehenderit similique eaque ipsum placeat consequuntur nemo! Magnam tempora quasi obcaecati cum numquam?"} 
        UserImage={"https://i.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"}
        />
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
    </div>
    
    </div>
  )
}
