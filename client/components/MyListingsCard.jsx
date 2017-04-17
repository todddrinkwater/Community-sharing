import React from 'react'
import { Link } from 'react-router-dom'


function MyListingsCard (props) {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src={props.image_url}></img>

        <div className='card-details-container'>
          <p className='card-heading'>{props.item_name}</p>
          <p className='card-details'>
            {props.description}
          </p>
        </div>
      </div>
      <div className='card-button-container'>
        <button className='card-button'>View</button>
      </div>
    </div>
  )
}

export default MyListingsCard
