import React from 'react'

import ScoreboardPlayerStats from 'components/ui/scoreboard-player-stats'
import ScoreboardPodium from 'components/ui/scoreboard-podium'
import 'styles/views/winner.scss'

const Winner = (props) => {
  return (
    <div className="winner-container">
      <div className="winner-main-div">
        <h1 className="winner-titel">Scoreboard</h1>
        <div className="winner-hero-div">
          <div className="winner-stats-div">
            <ScoreboardPlayerStats rootClassName="rootClassName"></ScoreboardPlayerStats>
            <ScoreboardPlayerStats rootClassName="rootClassName1"></ScoreboardPlayerStats>
            <ScoreboardPlayerStats rootClassName="rootClassName3"></ScoreboardPlayerStats>
          </div>
          <div className="winner-podium-div">
            <ScoreboardPodium></ScoreboardPodium>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winner
