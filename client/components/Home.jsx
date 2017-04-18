import React from 'react'
import { Link } from 'react-router-dom'

let Home = () => (
  <div className='homepage'>
    <div className='welcome-image'>
      <div className='welcome-text-container'>
            Welcome to Community Share, a place where you can borrow and lend items with others in you community.
          </div>
    </div>
    <div className='into-text-container'>
        To start your journey of commnity sharing and meeting other locals you can choose to browse one of the catagories below.
      </div>

    <Link to='/list-all'>
      <div id='homepage-borrow' className='homepage-catagory-container'>
        <p className='borrow-p'>I would like to borrow something</p>
      </div>
    </Link>
    <Link to='/lender-form'>
      <div id='homepage-lend' className='homepage-catagory-container'>
        <p className='lend-p'>I would like to lend something</p>
      </div>
    </Link>
  </div>
  )

export default Home
