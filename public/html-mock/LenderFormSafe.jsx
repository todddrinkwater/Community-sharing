import React from 'react'
import { connect } from 'react-redux'


import { getNewItem } from '../api'

let LenderForm = (props) => (
  <div className="lenderForm">
    <h1>List An Item</h1>
    <form method="post" onSubmit={ newItem }>
      <label>Title:</label><input type="text" name="item_name" />
      <label>Category</label><input type="text" name="category" />
      <label>Description</label><input type="text" name="description" />
      <label>Location</label><input type="text" name="location" />
      <label>Image Upload</label><input type="file" name="image_url" accept="image/*" /><br />
      <input type="text" value={props.user_id} name="user_id" readonly="readonly" />
      <input className="createListing" type="submit" value="Create Listing" />
    </form>
  </div>
)

function newItem(event) {
  event.preventDefault(event)
  var newItemData = {
    item_name: event.target.elements.item_name.value,
    category: event.target.elements.category.value,
    description: event.target.elements.description.value,
    location: event.target.elements.location.value,
    image_url: event.target.elements.image_url.value,
    owner_id: event.target.elements.user_id.value
  }
  getNewItem(testCallback, newItemData)
}

function testCallback (err, status) {
 console.log(status);
}

function mapStateToProps(state){
  return {
    user_id: state.loggedInUserDetails.user_id
  }
}

export default connect(mapStateToProps)(LenderForm)
