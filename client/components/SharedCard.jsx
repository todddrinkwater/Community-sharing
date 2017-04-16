import React from 'react'
import { Link } from 'react-router-dom'
import { displaySingleItem } from '../actions'

function SharedCard (props) {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src={props.user_image_url}></img>

        <p className='shared-card-details'>
          <span className='shared-name'>You</span> are sharing your {props.description} with <span className='shared-name'>{props.fname}</span>
        </p>

        <img className='card-image' src='http://vignette1.wikia.nocookie.net/sote-rp/images/c/c4/User-placeholder.png/revision/latest?cb=20150624004222'></img>
    </div>
    <div className='card-button-container'>
      <Link to="order"><button className='card-button'>More</button></Link>
    </div>
  </div>
  )
}

export default SharedCard
