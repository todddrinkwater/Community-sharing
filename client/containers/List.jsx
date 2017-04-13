import React from 'react'
import ListItem from '../components/ListItem'

function List(props) {
  return (
    <div className='List'>
      <div className="SearchBar">
        <input id="search-input" type="text" name="search" placeholder="Search.." />
      </div>

      <ListItem />
  </div>
  )}

export default List
