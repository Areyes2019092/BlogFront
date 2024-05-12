import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/pedropedro.jpg'


const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>Post tittle</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores sapiente at porro,
           eos perferendis nemo ratione quo eaque. Natus qui earum ipsam! Quod deserunt aperiam voluptatum commodi temporibus magnam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur illo laboriosam quod
           debitis omnis. Non ratione repudiandae iure a, quibusdam itaque voluptate laudantium, voluptatibus, reprehenderit maxime sint suscipit qui libero.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ipsam eligendi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium itaque adipisci nihil qui molestias minima maiores blanditiis sed mollitia autem!
      </p>
      </div>
      
    </section>
  )
}

export default PostDetail
