import React from 'react'
import { useNavigate } from 'react-router-dom'

import 'styles/views/winner.scss'

import ScoreboardPlayerStats from 'components/ui/scoreboard-player-stats'
import ScoreboardPodium from 'components/ui/scoreboard-podium'


const Winner = (props) => {
  const navigate = useNavigate()

  return (
    <div className="winner-container">
      <div className="winner-header-div">
        <button className="winner-goHome button" onClick={() => {navigate("/lobby")}}>
          Back to Lobby</button>
      </div>
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
