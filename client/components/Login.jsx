import React from 'react'
import { Link } from 'react-router-dom'

let Login = (props) => (
  <div className="Login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="LoginGreeting">Welcome to [insert kick-ass name here]. <br /> Please sign in below.</div>
    <p>Email</p><input type="text" name="email" /><br />
    <p>Password</p><input type="password" name="password" />
    <p>No account?</p><Link to="/register">Register Now?</Link>
  </div>
)

export default Login
