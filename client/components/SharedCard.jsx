import React from 'react'
import { Link } from 'react-router-dom'
import { fetchSingleItem, fetchBorrowerById } from '../actions'

function SharedCard (props) {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src={props.loggedInImage} />

        <p className='shared-card-details'>
          <span className='shared-name'>You</span> are sharing your {props.item_name} with <span className='shared-name'>{props.fname}</span>
        </p>

        <img className='card-image' src={props.user_image_url} />
      </div>
      <div className='card-button-container'>
        <Link to='order'><button className='card-button' onClick={() => goToOrder(props)} >More</button></Link>
      </div>
    </div>
  )
}

export default SharedCard

function goToOrder (props) {
  props.dispatch(fetchSingleItem(props.item_id))
  props.dispatch(fetchBorrowerById(props.borrowers_id))
}
