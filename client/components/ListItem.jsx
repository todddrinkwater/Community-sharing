import React from 'react'
import { Link } from 'react-router-dom'

function ListItem (props) {
  return (
  <div className="listItem">
    <div className="listItemHeader">
      <h2>List Item Title</h2>
      <h3>Location</h3>
    </div>

    <Link to="/list-item">
      <div className="listItemImageContainer">
        <img className="listItemImage" src="http://images.nationalgeographic.com/wpf/media-live/photos/000/174/cache/lawn-mower_17497_600x450.jpg" />
      </div>
    </Link>

    <p>
      List Item Description goes here... blah blah blah...  blah blah blah...  blah blah blah...  blah blah blah...  blah blah blah...
    </p>

  </div>
)}

export default ListItem
