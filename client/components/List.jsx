import React from 'react'


function List(props) {
  return (
    <div className='List'>
      <div className="SearchBar">
        <input id="search-input" type="text" name="search" placeholder="Search.." />
      </div>

      <div className="listItem">
        <div className="listItemHeader">
          <h2>List Item Title</h2>
          <h3>Location</h3>
        </div>

        <div className="listItemImageContainer">
          <img className="listItemImage" src="http://images.nationalgeographic.com/wpf/media-live/photos/000/174/cache/lawn-mower_17497_600x450.jpg" />
        </div>

        <p>
          List Item Description goes here... blah blah blah...  blah blah blah...  blah blah blah...  blah blah blah...  blah blah blah...
        </p>
    </div>
  </div>
  )}

export default List
