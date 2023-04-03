import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/big-screen-view.scss'

const BigScreenView = (props) => {
  return (
    <div className="big-screen-view-container">
      <Helmet>
        <title>BigScreen-View - SoPra Mockups</title>
        <meta property="og:title" content="BigScreen-View - SoPra Mockups" />
      </Helmet>
    </div>
  )
}

export default BigScreenView
