import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState, useContext} from "react";
import './RenderedPosts.css'
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { Post } from "../Post/Post";


export const RenderedPosts = () => {
  const [posts, setPosts] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() =>{
    const newUser = onSnapshot(doc(db, 'users', currentUser.uid), (doc) =>{
      setUser(doc.data());
    });
    return newUser
  }, [currentUser.uid]);

  useEffect (() => {
    const unSub = onSnapshot(doc(db, "carreras", "LMAD"), (doc) => {
        doc.exists() && setPosts(doc.data().posts)
        console.log(posts);
    })

    return () => {
        unSub()
    }
  }, [currentUser.uid])

  return (
    <div className='Container_RenderedPosts'>
    <div className='box_Posts'>
        {
          posts.map(post =>
          <Post
            Date={post.datePost} 
            UserName={post.posterName} 
            PostMessage={post.postText} 
            UserImage={post.posterImage}
            PostType={post.postType}
          />
          )
        }
    </div>
    
    </div>
  )
}
