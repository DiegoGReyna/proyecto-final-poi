import { doc, onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import './RenderedPosts.css'
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { Post } from "../Post/Post";


export const RenderedPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() =>{
    onSnapshot(collection(db, 'users'), (snapshot) =>{
        snapshot.docs.map(doc => 
            doc.data().uid == currentUser.uid ?
            setUser((doc.data()))
            :
            null)
    });
  }, [currentUser]);


  useEffect (() => {
    onSnapshot(doc(db, "carreras", props.carrera), (doc) => {
        doc.exists() && setPosts(doc.data().posts)
    })

  }, [currentUser.uid])


  return (
    <div className='Container_RenderedPosts'>
    <div className='box_Posts'>
        {
          posts != undefined ?
            posts.map(post =>
            <Post
              Date={post.datePost} 
              UserName={post.posterName} 
              PostContent={post.postContent} 
              UserImage={post.posterImage}
              PostType={post.postType}
            />
            )
          :
              null
        }
    </div>
    
    </div>
  )
}
