import React from 'react'

let Login = (props) => (
  <div className="Login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="LoginGreeting">Welcome to [insert kick-ass name here]. <br /> Please sign in below.</div>
    <p>Email</p><input type="text" name="email" /><br />
    <p>Password</p><input type="password" name="password" />
  </div>
)

export default Login
