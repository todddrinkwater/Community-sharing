import React from 'react'
import { connect } from 'react-redux'

let MyLoanedDetails = (props) => (
  <div className='transaction'>
    <h3>Request Approved - Transaction Receipt</h3>

    <p> Good News! {props.orderItemDetails.fname} {props.orderItemDetails.lname} is lending you their {props.orderItemDetails.item_name}.</p>

    <div className='order-image-container'>
      <img className='order-image' src={props.orderItemDetails.image_url}></img>
      <img className='order-image' src={props.orderItemDetails.user_image_url}></img>
    </div>


    <p>
      You can contact {props.orderItemDetails.fname} via the following methods:
      <br />
      <span className='order-bold-text'>Phone:</span> {props.orderItemDetails.phone}<br />
      <span className='order-bold-text'>email:</span> {props.orderItemDetails.email}<br />
    </p>

  </div>
)

function mapStateToProps (state) {
  console.log(state.orderItemDetails[0]);
  return {
    orderItemDetails: state.orderItemDetails[0]
  }
}

export default connect(mapStateToProps)(MyLoanedDetails)
