import React from 'react'

import 'styles/views/lobby.scss'

const Lobby = (props) => {
  return (
    <div className="lobby-container">
      <div className="lobby-header-div">
        <div className="lobby-camel-preview-div">
          <div className="lobby-camel-div">
            <img
              alt="image"
              src="/playground_assets/bluecamel-200h.gif"
              className="lobby-camel"
            />
          </div>
          <h1 className="lobby-preview-title">You</h1>
        </div>
        <h1 className="lobby-lobby-title">Lobby</h1>
        <div className="lobby-logout-div">
          <button className="lobby-logout button">Logout</button>
        </div>
      </div>
      <div className="lobby-hero-div">
        <div className="lobby-btn-group">
          <button className="lobby-new-game button">New Game</button>
          <button className="lobby-join-game button">Join Game</button>
        </div>
      </div>
    </div>
  )
}

export default Lobby
