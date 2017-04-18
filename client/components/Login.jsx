import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchUser } from '../actions'

let Login = (props) => (
  <div className='login'>
    <img src='http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png' />
    <div className='LoginGreeting'>
      Welcome to [insert kick-ass name here]. <br /> Please sign in below.
    </div>
    <form>
      <label>Email</label><input id='email-input' type='text' name='email' placeholder='example@email.com' />
      <label>Password</label><input type='password' name='password' />
      <Link to='/dashboard'>
        <button type='button' value='Login' onClick={() => submitUser(props)} >Login</button>
      </Link>
    </form>
    <p>No account?</p>
    <Link to='/register'>
      Register Now?
    </Link>
  </div>
)

function mapStateToProps (state) {
  return {
    dispatch: state.dispatch
  }
}

function submitUser (ev, props) {
  ev.preventDefault(ev)
  props.dispatch(fetchUser(document.getElementById('email-input').value))
}

export default connect(mapStateToProps)(Login)
