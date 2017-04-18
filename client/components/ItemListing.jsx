import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { fetchLenderById } from '../actions'

class ItemListing extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLenderById(this.props.item.owner_id))
  }


  render () {
    return (
      <div className='ItemListing'>
        <div>
          <h1 className='itemTitle'>{this.props.item.item_name}</h1>
          <img className='itemListingImage' src={this.props.item.image_url} />
          <p>
            {this.props.item.description}
          </p>
        </div>
        <div className='itemListingUserDetails'>
          <img className='itemListingUserPhoto' src={this.props.lenderDetails.user_image_url} />
          <h2>{this.props.lenderDetails.fname} {this.props.lenderDetails.lname}</h2>
          <h3>{this.props.item.location}</h3>
        </div>
        <form className='requestForm' action='/action_page.php'>
          <p>
            <input type='checkbox' name='vehicle' value='Bike' />By ticking this box, I agree to the <Link to='/TermsConditions'>Terms and Conditions</Link> of Community Share.
          </p>
          <Router>
            <Link to='/dashboard'>
              <input type='submit' value='Request Item' />
            </Link>
          </Router>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    item: state.singleItem,
    dispatch: state.dispatch,
    lenderDetails: state.lenderDetails[0]
  }
}

export default connect(mapStateToProps)(ItemListing)
