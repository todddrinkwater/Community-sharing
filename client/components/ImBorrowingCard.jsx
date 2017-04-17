import React from 'react'
import { Link } from 'react-router-dom'

function ImBorrowingCard (props) {
  console.log(props);
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/CC500BAT.png/220px-CC500BAT.png'></img>
        <div className='card-details-container'>
          <p className='card-heading'>{props.item_name}</p>
          <p className='card-details'>{props.description}</p>
        </div>
      </div>
      <div className='card-button-container'>
        <Link to="/order"><button className='card-button'>More</button></Link>
      </div>
    </div>
  )
}

export default ImBorrowingCard
