import React from 'react'
import { Link } from 'react-router-dom'

let Login = (props) => (
  <div className="login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="LoginGreeting">
      Welcome to [insert kick-ass name here]. <br /> Please sign in below.
    </div>
    <form>
      <label>Email</label><input type="text" name="email" />
      <label>Password</label><input type="password" name="password" />
      <input type="submit" value="Login" />
    </form>
    <p>No account?</p><Link to="/register">Register Now?</Link>
  </div>
)

export default Login
