import React from 'react'
import { connect } from 'react-redux'

import { orderItemDetails } from '../actions'

function Order (props) {
  console.log(props);
  return (
    <div className="Order">
      <h1>Request Approved - Transaction Receipt</h1>

      <h3>Item Details</h3>
      <ul>
        <li>Item: Lawn Mower</li>
        <li>Pick Up Date: 01-01-2015</li>
        <li>Drop Off Date: 03-01-2015</li>
      </ul>

      <h3>Lender Details</h3>
      <ul>
        <li>Name: {props.orderItemDetails.fname} {props.orderItemDetails.lname}</li>
        <li>Phone: {props.orderItemDetails.phone}</li>
        <li>email: {props.orderItemDetails.email}</li>
      </ul>

      <h3>My Details</h3>
      <ul>
        <li>Name: {props.loggedInUserDetails.fname} {props.loggedInUserDetails.lname}</li>
        <li>Phone: {props.loggedInUserDetails.phone}</li>
        <li>email: {props.loggedInUserDetails.email}</li>
      </ul>

    </div>
  )
}

function mapStateToProps(state){
  return {
    loggedInUserDetails: state.loggedInUserDetails,
    orderItemDetails: state.orderItemDetails[0]
  }
}

export default connect(mapStateToProps)(Order)
