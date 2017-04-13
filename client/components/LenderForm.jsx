import React from 'react'

let LenderForm = (props) => (
  <div class="lenderForm">
    <h1>List An Item</h1>
    <form action="index.html" method="post">
      <p>Title:</p><input type="text" class="lname" />
      <p>Category</p><input type="text" class="email" />
      <p>Description</p><input type="text" class="address" />
      <p>Image Upload</p><input type="file" name="pic" accept="image/*" /><br />
      <input class="createListing" type="submit" value="Create Listing" />
    </form>
  </div>
)

export default LenderForm
