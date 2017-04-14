import React from 'react'

let LenderForm = (props) => (
  <div className="lenderForm">
    <h1>List An Item</h1>
    <form action="index.html" method="post">
      <p>Title:</p><input type="text" className="lname" />
      <p>Category</p><input type="text" className="email" />
      <p>Description</p><input type="text" className="address" />
      <p>Image Upload</p><input type="file" name="pic" accept="image/*" /><br />
      <input className="createListing" type="submit" value="Create Listing" />
    </form>
  </div>
)

export default LenderForm
