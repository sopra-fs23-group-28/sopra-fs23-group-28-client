import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/login.scss'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>SoPra Mockups</title>
        <meta property="og:title" content="SoPra Mockups" />
      </Helmet>
      <div className="login-container1">
        <h1 className="login-login-text">Heading</h1>
        <span className="login-text">
          <span>logindescription</span>
          <br></br>
        </span>
        <div className="login-container2">
          <span className="login-text3">Name</span>
          <input
            type="text"
            name="Name"
            required
            placeholder="Name"
            autoComplete="name"
            className="login-input input"
          />
        </div>
        <button type="submit" className="login-button button">
          <span>
            <span>Login</span>
            <br></br>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Login
