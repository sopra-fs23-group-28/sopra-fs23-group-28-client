import Loader from 'components/ui/loader'
import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/loader.scss'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Loader - SoPra Mockups</title>
        <meta property="og:title" content="Loader - SoPra Mockups" />
      </Helmet>
      <div className="register-container1">
        <Loader/>
      </div>
    </div>
  )
}

export default Register
