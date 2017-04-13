import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div className="homepage">
      <Link to="/list">
        <div className="borrow-div">
          <p className="borrow-p">IM HERE TO BORROW</p>
        </div>
      </Link>
      <Link to="/lender-form">
        <div className="lend-div">
          <p className="lend-p">IM HERE TO LEND</p>
        </div>
      </Link>
    </div>
  )

export default HomePage
