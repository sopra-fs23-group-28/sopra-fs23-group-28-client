import React from 'react'

import { Helmet } from 'react-helmet'

import WinnerScoreboardTop3 from 'components/ui/winner-scoreboard-top3'
import 'styles/views/winner.scss'

const Winner = (props) => {
  return (
    <div className="winner-container">
      <Helmet>
        <title>Winner - SoPra Mockups</title>
        <meta property="og:title" content="Winner - SoPra Mockups" />
      </Helmet>
      <div className="winner-features">
        <h1 className="winner-text">
          <span>Scoreboard</span>
          <br></br>
        </h1>
        <div className="winner-container1">
          <div className="winner-container2">
            <WinnerScoreboardTop3 rootClassName="rootClassName"></WinnerScoreboardTop3>
            <WinnerScoreboardTop3 rootClassName="rootClassName1"></WinnerScoreboardTop3>
            <WinnerScoreboardTop3 rootClassName="rootClassName2"></WinnerScoreboardTop3>
          </div>
          <div className="winner-container3">
            <h1>
              <span>TrailingPlayers</span>
              <br></br>
            </h1>
            <ol className="winner-ul list">
              <li className="winner-li list-item">
                <span>
                  <span>FourthPlayer</span>
                  <br></br>
                </span>
              </li>
              <li className="winner-li1 list-item">
                <span>
                  <span>FifthPlayer</span>
                  <br></br>
                </span>
              </li>
              <li className="winner-li2 list-item">
                <span>SixthPlayer</span>
              </li>
              <li className="list-item">
                <span>
                  <span>...</span>
                  <br></br>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winner
