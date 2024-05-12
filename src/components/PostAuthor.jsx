import React from 'react'
import Avatar from '../images/KLProfilePic.jpg'
import { Link } from 'react-router-dom'


const PostAuthor = () => {
  return (
    <div>
      <Link to={`/posts/users/radiohead`} className='post__author'>
        <div className="post__author-avatar">
            <img src={Avatar} alt="" />
        </div>

        <div className="post__author-details">
            <h5>By Angel Reyes</h5>
            <small>Just now</small>
        </div>
      </Link>
    </div>
  )
}

export default PostAuthor
