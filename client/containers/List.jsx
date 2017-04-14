import React from 'react'
import ListItem from '../components/ListItem'
import {connect} from 'react-redux'

function List(props) {
  return (
    <div className='List'>
      <div className="SearchBar">
        <input id="search-input" type="text" name="search" placeholder="Search.." />
      </div>

      <div className="Category">
      <ul className="Category-ul">
        <li className="Category-li"><a href="#">Tools</a></li>
        <li className="Category-li"><a href="#">Music Equipment</a></li>
        <li className="Category-li"><a href="#">Sport & Rec</a></li>
        <li className="Category-li"><a href="#">Other</a></li>
      </ul>
      </div>

      <ListItem />
  </div>
  )}

export default List
