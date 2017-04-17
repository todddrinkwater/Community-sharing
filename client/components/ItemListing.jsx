import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Link } from 'react-router-dom'

import { fetchUserById } from '../actions'


class ItemListing extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserById(7005))
  }
  render() {
    return (
      <div className="ItemListing">
        <div>
          <h1 className="itemTitle">{this.props.item.item_name}</h1>
          <img className="itemListingImage" src={this.props.item.image_url} />
          <p>
            {this.props.item.description}
          </p>
        </div>
        <div className="itemListingUserDetails">
          <img className="itemListingUserPhoto" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
          <h2>Lender Name</h2>
          <h3>{this.props.item.location}</h3>
        </div>
        <form className="requestForm" action="/action_page.php">
          <p>
            <input type="checkbox" name="vehicle" value="Bike" />By ticking this box, I agree to the <a href="#">Terms and Condtions</a> of Community Share.
          </p>
          <Router>
            <Link to="/dashboard">
              <input type="submit" value="Request Item" />
            </Link>
          </Router>
        </form>
      </div>
    )
  }
}





// function ItemListing (props) {
//   console.log(props);
//   return (
//
    // <div className="ItemListing">
    //   <div>
    //     <h1 className="itemTitle">{props.item.item_name}</h1>
    //     <img className="itemListingImage" src={props.item.image_url} />
    //     <p>
    //       {props.item.description}
    //     </p>
    //   </div>
    //   <div className="itemListingUserDetails">
    //     <img className="itemListingUserPhoto" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
    //     <h2>Lender Name</h2>
    //     <h3>{props.item.location}</h3>
    //   </div>
    //   <form className="requestForm" action="/action_page.php">
    //     <p>
    //       <input type="checkbox" name="vehicle" value="Bike" />By ticking this box, I agree to the <a href="#">Terms and Condtions</a> of Community Share.
    //     </p>
    //     <Router>
    //       <Link to="/dashboard">
    //         <input type="submit" value="Request Item" />
    //       </Link>
    //     </Router>
    //   </form>
    // </div>
//
// )}

function mapStateToProps(state){
  return {
    item: state.singleItem,
    dispatch: state.dispatch
  }
}

export default connect(mapStateToProps)(ItemListing)
