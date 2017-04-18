import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { displaySingleItem } from '../actions'


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

      <Link to="/list-item" className="cardLink">
        <div className='card-button-container'>
          <button className='card-button' onClick={ () => props.dispatch(displaySingleItem(props)) }>View</button>
        </div>
      </Link>

    </div>
  )
}

function mapStateToProps(state){
  return {
    item: state.singleItem,
    dispatch: state.dispatch,
  }
}

export default connect(mapStateToProps)(MyListingsCard)
