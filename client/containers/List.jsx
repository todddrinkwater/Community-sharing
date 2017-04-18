import React from 'react'
import {connect} from 'react-redux'

import ListItem from '../components/ListItem'
import { initialListings } from '../actions'
import { filteredListings } from '../actions'
import { searchForItem } from '../actions'

function List(props) {
  return (
    <div className='List'>
      <div className="search-bar-container">
        <label className='search-label'>Search</label>
        <input id="search-input" type="text" name="search" />
        <button className='search-button' onClick={ () => search(props.dispatch) }>Search</button>
      </div>

      <div className="Category">
        <select selected="All" name="category" onChange={ (e) => changeEventHandler(e, props.dispatch, props.initialListings) }>
          <option value="All">All</option>
          <option value="Tools">Tools</option>
          <option value="Musical Instruments">Musical Instruments</option>
          <option value="Sport and Recreation">Sport and Recreation</option>
          <option value="Other">Other</option>
        </select>
      </div>


      {props.filteredListings.map( (listItem) => {
         return (
           <ListItem key={listItem.item_id} {...listItem} dispatch={props.dispatch} />
          )
      })}

  </div>
)}


function changeEventHandler(event, dispatch, initialListings) {
    filterList(dispatch, initialListings, event.currentTarget.value )
   }

  function mapStateToProps(state){
    return {
      initialListings: state.initialListings,
      filteredListings: state.filteredListings,
      dispatch: state.dispatch
    }
  }

  function search(dispatch) {
    dispatch(searchForItem(document.getElementById('search-input').value))
  }

  function filterList (dispatch, allListings, category){

    if (category == "All") {
      dispatch(filteredListings(allListings))
    } else {
      var filteredList = allListings.filter( (listItem) => {
        return listItem.category == category
      })
      dispatch(filteredListings(filteredList))
    }
  }

  export default connect(mapStateToProps)(List)
