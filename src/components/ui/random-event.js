import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/random-event.scss'

const RandomEvent = (props) => {
  return (
    <div className="random-event-container">
      <Helmet>
        <title>Random-Event - SoPra Mockups</title>
        <meta property="og:title" content="Random-Event - SoPra Mockups" />
      </Helmet>
    </div>
  )
}

export default RandomEvent
