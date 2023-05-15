import React from 'react'
import PropTypes from 'prop-types'

import 'styles/ui/scoreboard-podium.scss'

import greencamel from "../../playground_assets/greencamel-victory.png"
import redcamel from "../../playground_assets/redcamel-victory.png"
import bluecamel from "../../playground_assets/bluecamel-victory.png"
import blackcamel from "../../playground_assets/blackcamel-victory.png"
import purplecamel from "../../playground_assets/purplecamel-victory.png"
import greycamel from "../../playground_assets/greycamel-victory.png"
import neoncamel from "../../playground_assets/neoncamel-victory.png"

// Get Avatar from CamelColor of the User
const getAvatar = (user) => {

  let url = ''
  if (user) {
    switch (user.camelColor) {
      case 'DARKGREEN':
        url = greencamel
        break;
      case 'RED':
        url = redcamel
        break;
      case 'BLUE':
        url = bluecamel
        break;
      case 'BLACK':
        url = blackcamel
        break;
      case 'PURPLE':
        url = purplecamel
        break;
      case 'GREY':
        url = greycamel
        break;
      case 'NEONGREEN':
        url = neoncamel
        break;

      default:
        url = ""
        break;
    }

  }
  return url
}


const ScoreboardPodium = (props) => {
  return (
    <div className="scoreboard-podium-container">
      <div className="scoreboard-podium-main-div">

        {
          props.users[1] &&

          <div className="scoreboard-podium-second-div">
            <div className="scoreboard-podium-second-avatar-div">
              <img
                alt={props.image_alt}
                src={getAvatar(props.users[1])}
                className="scoreboard-podium-second-avatar"
              />
              <h1 className="scoreboard-podium-second-rank">{props.rank2}</h1>
            </div>
          </div>
        }
        <div className="scoreboard-podium-first-div">
          <div className="scoreboard-podium-first-avatar-div">
            <img
              src={getAvatar(props.users[0])}
              alt={props.image_alt1}
              className="scoreboard-podium-first-avatar"
            />
            <h1 className="scoreboard-podium-first-rank">{props.rank1}</h1>
          </div>
        </div>
        {
          props.users[2] &&

          <div className="scoreboard-podium-third-div">
            <div className="scoreboard-podium-third-avatar-div">
              <img
                src={getAvatar(props.users[2])}
                alt={props.image_alt2}
                className="scoreboard-podium-third-avatar"
              />
              <h1 className="scoreboard-podium-third-rank">{props.rank3}</h1>
            </div>
          </div>
        }
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
