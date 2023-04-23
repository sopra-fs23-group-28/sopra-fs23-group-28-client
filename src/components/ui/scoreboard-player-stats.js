import React from 'react'
import PropTypes from 'prop-types'

import 'styles/ui/scoreboard-player-stats.scss'

const ScoreboardPlayerStats = (props) => {
  return (
    <div
      className={`scoreboard-player-stats-feature-card ${props.rootClassName} `}
    >
      <div className="scoreboard-player-stats-ranking-div">
        <h1 className="scoreboard-player-stats-rank">{props.rank}</h1>
        <h1 className="scoreboard-player-stats-player-name">{props.username}</h1>
      </div>
      <div className="scoreboard-player-stats-stats-div">
        <h1 className="scoreboard-player-stats-stats-titel">{props.heading}</h1>
        <ul className="scoreboard-player-stats-stats list">
          <li className="list-item">
            <label className="">Distance</label>
          </li>
          <li className="list-item">
            <label className="">Boosts</label>
          </li>
          <li className="list-item">
            <label className="">Longest streak</label>
          </li>
        </ul>
      </div>
    </div>
  )
}

ScoreboardPlayerStats.defaultProps = {
  username: 'playerName',
  rootClassName: '',
  rank: 'Rank #',
  heading: 'Stats',
}

ScoreboardPlayerStats.propTypes = {
  username: PropTypes.string,
  rootClassName: PropTypes.string,
  rank: PropTypes.string,
  heading: PropTypes.string,
}

export default ScoreboardPlayerStats
