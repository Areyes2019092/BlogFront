import React, { useState } from 'react'

import Thumbnail1 from '../images/RadioheadProfilePic.jpg'
import Thumbnail2 from '../images/mgmtProfilePic.jpg'
import Thumbnail3 from '../images/KLProfilePic.jpg'
import PostItem from './PostItem'


const DUMMY_POSTS = [
    {
        id: '1', 
        thumbnail: Thumbnail1,
        category: 'taller',
        title: 'This is the title',
        desc: 'Lorem ipsum dolor s', 
        authorID: 3,
    },

    {
        id: '2', 
        thumbnail: Thumbnail2,
        category: 'tegnologia',
        title: 'This is the title',
        desc: 'Lorem ipsum dolor s', 
        authorID: 1,
    },
    {
        id: '3', 
        thumbnail: Thumbnail3,
        category: 'practica supervisada',
        title: 'This is the title',
        desc: 'Lorem ipsum dolor s', 
        authorID: 3,
    }


]





const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
       <div className="container posts__container">
       {
            posts.map(({id, thumbnail, category, title, desc, authorID} ) =>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
            description={desc} authorID={authorID} />)
        }
       </div>
    </section>
  )
}

export default Posts
