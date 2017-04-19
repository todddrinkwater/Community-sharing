import React from 'react'
import { connect } from 'react-redux'

let MyLoanedDetails = (props) => (
  <div className='Order'>
    <h3>Request Approved - Transaction Receipt</h3>

    <h3>Item Details</h3>
    <ul>
      <li>Item: {props.orderItemDetails.item_name}</li>
      <li>Details: {props.orderItemDetails.description}</li>
      <li>Pick Up Date: 01-01-2015</li>
      <li>Drop Off Date: 03-01-2015</li>
    </ul>

    <h3>Borrower Details</h3>
    <ul>
      <li>Name: {props.borrowerDetails.fname} {props.borrowerDetails.lname}</li>
      <li>Phone: {props.borrowerDetails.phone}</li>
      <li>email: {props.borrowerDetails.email}</li>
    </ul>

  </div>
)

function mapStateToProps (state) {
  return {
    borrowerDetails: state.borrowerDetails[0],
    orderItemDetails: state.orderItemDetails[0]
  }
}

export default connect(mapStateToProps)(MyLoanedDetails)
