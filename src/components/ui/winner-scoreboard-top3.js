import React from 'react'

import PropTypes from 'prop-types'

import 'styles/ui/winner-scoreboard-top3.scss'

const WinnerScoreboardTop3 = (props) => {
  return (
    <div
      className={`winner-scoreboard-top3-feature-card ${props.rootClassName} `}
    >
      <div className="winner-scoreboard-top3-container">
        <div className="winner-scoreboard-top3-container1">
          <h1 className="winner-scoreboard-top3-text">{props.title}</h1>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="winner-scoreboard-top3-image"
          />
        </div>
        <div className="winner-scoreboard-top3-container2">
          <h1 className="winner-scoreboard-top3-text01">{props.heading1}</h1>
          <span className="winner-scoreboard-top3-text02">{props.text}</span>
        </div>
      </div>
      <div className="winner-scoreboard-top3-container3">
        <h1 className="">{props.heading}</h1>
        <ul className="winner-scoreboard-top3-ul list">
          <li className="list-item">
            <span className="">
              <span className="">Distance</span>
              <br className=""></br>
            </span>
          </li>
          <li className="list-item">
            <span className="">Boosts</span>
          </li>
          <li className="list-item">
            <span className="">
              <span className="">LongestStreak</span>
              <br className=""></br>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

WinnerScoreboardTop3.defaultProps = {
  text: '# rank',
  rootClassName: '',
  image_alt: 'image',
  heading1: 'Rank',
  heading: 'Stats',
  title: 'Player name',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
}

WinnerScoreboardTop3.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  heading: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default WinnerScoreboardTop3
