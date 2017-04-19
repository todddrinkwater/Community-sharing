import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchSingleItem } from '../actions'

let BorrowedItemCard = (props) => (
  <div className='card-wrapper'>
    <div className='card-container'>
      <img className='card-image' src={props.image_url} />
      <div className='card-details-container'>
        <p className='card-heading'>{props.item_name}</p>
        <p className='card-details'>{props.description}</p>
      </div>
    </div>
    <div className='card-button-container'>
      <Link to='/b-details'>
        <button className='card-button' onClick={() => props.dispatch(fetchSingleItem(props.item_id))}>More</button>
      </Link>
    </div>
  </div>
)

export default connect()(BorrowedItemCard)
