import React, { useState } from 'react'
import Avatar from '../images/AngelR.png'
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaRegCircleCheck } from "react-icons/fa6";


const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to={`/myposts/angel`} className='btn'>My posts</Link>

        <div className='profile__details'>
          <div className="avatar__wrapper">
            <div className="profile__avatar">
              <img src={avatar} alt="" />
            </div>
            <form className="avatar__form">
              <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])} id="avatar" accept="png, jpg, jpeg" />
              <label htmlFor="avatar"><CiEdit /></label>
            </form>
            <button className="profile__avatar-btn"><FaRegCircleCheck /></button>
          </div>

          <h1>Angel Reyes</h1>
          <form className="form profile__form">
            <p className="form__error.message">Error</p>
            <input type="text" placeholder='Name' value={name}  onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email}  onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={currentPassword}  onChange={e => setCurrentPassword(e.target.value)}/>
            <input type="password" placeholder='New Password' value={newPassword}  onChange={e => setNewPassword(e.target.value)}/>
            <input type="password" placeholder='Confirm New Password' value={confirmNewPassword}  onChange={e => setConfirmNewPassword(e.target.value)}/>
            <button type="submit" className='btn primary'>Update profile </button>
          </form>
        </div>

      </div>
    </section>


  )
}

export default UserProfile
