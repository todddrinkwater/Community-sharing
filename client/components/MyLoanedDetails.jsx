import React from 'react'
import { connect } from 'react-redux'

let MyBorrowedDetails = (props) => (
  <div className='transaction'>
    <h3>Request Approved - Transaction Receipt</h3>

    <p> Good News, {props.borrowerDetails.fname} {props.borrowerDetails.lname} wants to borrow your {props.orderItemDetails.item_name}!</p>

    <div className='order-image-container'>
      <img className='order-image' src={props.orderItemDetails.image_url} />
      <img className='order-image' src={props.borrowerDetails.user_image_url} />
    </div>

    <p>
      You can contact {props.borrowerDetails.fname} via the following methods:
      <br />
      <span className='order-bold-text'>Phone:</span> {props.borrowerDetails.phone}<br />
      <span className='order-bold-text'>Email:</span> {props.borrowerDetails.email}<br />
    </p>

  </div>
)

function mapStateToProps (state) {
  return {
    borrowerDetails: state.borrowerDetails[0],
    orderItemDetails: state.orderItemDetails[0]
  }
}

export default connect(mapStateToProps)(MyBorrowedDetails)
