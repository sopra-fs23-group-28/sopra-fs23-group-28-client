import React from 'react'
import PropTypes from 'prop-types'

import 'styles/ui/scoreboard-podium.scss'


const ScoreboardPodium = (props) => {
  return (
    <div className="scoreboard-podium-container">
      <div className="scoreboard-podium-main-div">
        <div className="scoreboard-podium-second-div">
          <div className="scoreboard-podium-second-avatar-div">
            <img
              alt={props.image_alt}
              src={props.secondAvatar}
              className="scoreboard-podium-second-avatar"
            />
            <h1 className="scoreboard-podium-second-rank">{props.rank2}</h1>
          </div>
        </div>
        <div className="scoreboard-podium-first-div">
          <div className="scoreboard-podium-first-avatar-div">
            <img
              require src={props.firstAvatar}
              alt={props.image_alt1}
              className="scoreboard-podium-first-avatar"
            />
            <h1 className="scoreboard-podium-first-rank">{props.rank1}</h1>
          </div>
        </div>
        <div className="scoreboard-podium-third-div">
          <div className="scoreboard-podium-third-avatar-div">
            <img
              require src={props.thirdAvatar}
              alt={props.image_alt2}
              className="scoreboard-podium-third-avatar"
            />
            <h1 className="scoreboard-podium-third-rank">{props.rank3}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

ScoreboardPodium.defaultProps = {
  rank2: '#2',
  rank1: '#1',
  rank3: '#3',
  secondAvatar: 'playground_assets/bluecamel-victory.png',
  image_alt: 'Avatar2',
  firstAvatar: '/playground_assets/neoncamel-victory.png',
  image_alt1: 'Avatar1',
  thirdAvatar: './playground_assets/blackcamel-victory.png',
  image_alt2: 'Avatar3',
}

ScoreboardPodium.propTypes = {
  rank2: PropTypes.string,
  rank1: PropTypes.string,
  rank3: PropTypes.string,
  secondAvatar: PropTypes.string,
  image_alt: PropTypes.string,
  firstAvatar: PropTypes.string,
  image_alt1: PropTypes.string,
  thirdAvatar: PropTypes.string,
  image_alt2: PropTypes.string,
}

export default ScoreboardPodium
