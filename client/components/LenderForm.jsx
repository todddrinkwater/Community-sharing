import React from 'react'

let LenderForm = (props) => (
  <div className="lenderForm">
    <h1>List An Item</h1>
    <form action="index.html" method="post">
      <label>Title:</label><input type="text" className="lname" />
      <label>Category</label><input type="text" className="email" />
      <label>Description</label><input type="text" className="address" />
      <label>Location</label><input type="text" className="location" />
      <label>Image Upload</label><input type="file" name="pic" accept="image/*" /><br />
      <input className="createListing" type="submit" value="Create Listing" />
    </form>
  </div>
)

export default LenderForm
