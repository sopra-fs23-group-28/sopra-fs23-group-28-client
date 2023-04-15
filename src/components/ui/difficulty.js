import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/difficulty.scss'

const Difficulty = (props) => {
  return (
    <div className="difficulty-container">
      <Helmet>
        <title>Difficulty - SoPra Mockups</title>
        <meta property="og:title" content="Difficulty - SoPra Mockups" />
      </Helmet>
      <div className="difficulty-container1">
        <h1>
          <span>SurrenderToTheWheelOfFate</span>
          <br></br>
        </h1>
        <div className="difficulty-container2"></div>
      </div>
    </div>
  )
}

export default Difficulty
