import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
  <div className="Login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="register">
      <h1>Register</h1>
      <form>
        <label>First Name: </label><input type="text" className="fname" />
        <label>Last Name: </label><input type="text" className="lname" />
        <label>Email: </label><input type="text" className="email" />
        <label>Address: </label><input type="text" className="address" />
        <label>Phone Number: </label><input type="text" className="phone" />
        <label>Password: </label><input type="password" className="hash" />
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
  )

export default Register
