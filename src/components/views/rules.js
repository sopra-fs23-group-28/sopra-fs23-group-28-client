import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <div className="rules-container">
      <Helmet>
        <title>Rules - SoPra Mockups</title>
        <meta property="og:title" content="Rules - SoPra Mockups" />
      </Helmet>
      <div className="rules-container1">
        <h1 className="rules-login-text">Heading</h1>
        <span className="rules-text">
          <span>logindescription</span>
          <br></br>
        </span>
        <button type="submit" className="rules-button button">
          <span>Back</span>
        </button>
      </div>
    </div>
  )
}

export default Rules
