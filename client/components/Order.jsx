import React from 'react'
import { connect } from 'react-redux'

function Order (props) {
  console.log(props.loggedInUserDetails);
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
        <li>Name: {props.loggedInUserDetails.fname}</li>
        <li>Phone: {props.loggedInUserDetails.phone}</li>
        <li>email: {props.loggedInUserDetails.email}</li>
      </ul>

      <h3>Borrower Details</h3>
      <ul>
        <li>Name: Pou Pou</li>
        <li>Phone: 021120021</li>
        <li>email: pou@yeahboiii.com</li>
      </ul>

    </div>
  )
}

function mapStateToProps(state){
  return {
    loggedInUserDetails: state.loggedInUserDetails
  }
}

export default connect(mapStateToProps)(Order)
