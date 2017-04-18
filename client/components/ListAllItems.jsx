import React from 'react'
import { Link } from 'react-router-dom'

import { displaySingleItem } from '../actions'

const ListAllItems = (props) => (
  <div className='listItem'>
    <div className='listItemHeader'>
      <h2>{props.item_name}</h2>
      <h3>{props.location}</h3>
    </div>

    <Link to='/list-item'>
      <div className='listItemImageContainer' onClick={() => props.dispatch(displaySingleItem(props))} >
        <img className='listItemImage' src={props.image_url} />
      </div>
    </Link>

    <div className='list-item-description-container'>
      <p> {props.description} </p>
    </div>

  </div>
)

export default ListAllItems
