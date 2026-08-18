import React from 'react'
import logo from '../assets/deadpool.webp'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id="user-title">{props.name}</p>
      <img id="user-img" src={props.image} alt='deadpool'></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard