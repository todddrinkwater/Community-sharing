import React from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../api'

let Login = (props) => (
  <div className="login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="LoginGreeting">
      Welcome to [insert kick-ass name here]. <br /> Please sign in below.
    </div>
    <form onSubmit={ login }>
      <label>Email</label><input type="text" name="email" placeholder='example@email.com' />
      <label>Password</label><input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
    <p>No account?</p><Link to="/register">Register Now?</Link>
  </div>
)

function login(event){
  event.preventDefault(event)
  var submitedEmail = event.target.elements.email.value
  var submitedPassword = event.target.elements.password.value
  getUsers(testCallback, submitedEmail)
}

function testCallback(err, data){
  console.log(data);
}

export default Login
