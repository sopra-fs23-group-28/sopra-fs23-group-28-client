import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/lobby.scss'

const Lobby = (props) => {
  return (
    <div className="lobby-container">
      <Helmet>
        <title>Lobby - SoPra Mockups</title>
        <meta property="og:title" content="Lobby - SoPra Mockups" />
      </Helmet>
      <div className="lobby-container1">
        <div className="lobby-container2">
          <div className="lobby-container3">
            <img
              alt="image1"
              src="/playground_assets/bluecamel-200h.gif"
              className="lobby-image"
            />
          </div>
          <h1 className="lobby-text">Heading</h1>
        </div>
        <h1 className="lobby-text1">Heading</h1>
        <div className="lobby-btn-group">
          <button className="lobby-logout button">Logout</button>
        </div>
      </div>
      <div className="lobby-container4">
        <div className="lobby-btn-group1">
          <button className="lobby-new-game button">New Game</button>
          <button className="lobby-join-game button">Join Game</button>
        </div>
      </div>
    </div>
  )
}

export default Lobby
