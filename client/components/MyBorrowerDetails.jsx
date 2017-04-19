import React from 'react'
import { connect } from 'react-redux'

let MyBorrowerDetails = (props) => (
  <div className='Order'>
    <h1>Request Approved - Transaction Receipt</h1>
    <h3>Item Details</h3>
    <ul>
      <li>Item: {props.orderItemDetails.item_name}</li>
      <li>Details: {props.orderItemDetails.description}</li>
      <li>Pick Up Date: 01-01-2015</li>
      <li>Drop Off Date: 03-01-2015</li>
    </ul>

    <h3>Owner Details</h3>
    <ul>
      <li>Name: {props.orderItemDetails.fname} {props.orderItemDetails.lname}</li>
      <li>Phone: {props.orderItemDetails.phone}</li>
      <li>email: {props.orderItemDetails.email}</li>
    </ul>

  </div>
)

function mapStateToProps (state) {
  return {
    orderItemDetails: state.orderItemDetails[0]
  }
}

export default connect(mapStateToProps)(MyBorrowerDetails)
