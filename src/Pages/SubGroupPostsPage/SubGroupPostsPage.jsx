import React from 'react'
import'./SubGroupPostsPage.css'
import { TextBarMainGroup } from '../../componenetes/TextBarMainGroup/TextBarMainGroup'
import { RenderedPosts } from '../../componenetes/RenderedPosts/RenderedPosts'
export const SubGroupPostsPage = () => {
  return (
    <div className='Container_MainGroupPostsPage'>
       <div className='tilte_Page'>
            <h1>Bienvenido al grupo LMAD</h1>
       </div>
    <RenderedPosts />
    <TextBarMainGroup />
    </div>
  )
}
