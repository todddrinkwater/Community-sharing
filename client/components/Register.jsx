import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
  <div className="login">
    <img src="http://otlmedia.co.za/wp-content/uploads/2013/10/share1inch.png" />
    <div className="register">
      <h1>Register</h1>
      <form>
        <label>First Name: </label><input type="text" className="fname" /><br />
        <label>Last Name: </label><input type="text" className="lname" />
        <label>Email: </label><input type="text" className="email" />
        <label>Address: </label><input type="text" className="address" />
        <label>Suburb: </label><input type="text" className="suburb" />
        <label>Town/City: </label><input type="text" className="town-city" />
        <label>Postcode: </label><input type="text" className="postcode" />
        <label>Phone Number: </label><input type="text" className="phone" />
        <label>Password: </label><input type="password" className="hash" />
        <label>Profile Picture</label><input type="file" name="pic" accept="image/*" />
        <input type="submit" value="Register" />
      </form>
    </div>
  </div>
  )

export default Register
