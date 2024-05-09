import React, { useState } from 'react'


import Avatar1 from '../images/pedropedro.jpg'
import Avatar2 from '../images/mgmtProfilePic.jpg'
import Avatar3 from '../images/SwingLynnPP.jpg'
import { Link } from 'react-router-dom'

const authorsData = [
    {id: 1, avatar: Avatar1, name: 'Pedro', posts: 1},
    {id: 2, avatar: Avatar2, name: 'Jacob', posts: 4},
    {id: 3, avatar: Avatar3, name: 'Ana', posts: 5}


]



const Authors = () => {
  const [ authors, setAuthors ] = useState(authorsData)
  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors__container">
        {
          authors.map(({id, avatar, name, posts}) =>{
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>Autors not found</h2>}
    </section>
  )
}

export default Authors
