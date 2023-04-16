import React from 'react'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <div className="rules-container">
      <div className="rules-main-div">
        <h1 className="rules-titel">The Rules</h1>
        <ol className="rules-rules-text list">
          <li className="list-item">
            <span>
              This is the first rule and contains some shite pertaining to not
              kissing the camels or whatever.
            </span>
          </li>
          <li className="list-item">
            <span>
              The game can be played with 2-4 players. The host can start the
              game as soon as at least 2 players are in the lobby.
            </span>
          </li>
          <li className="list-item">
            <span>
              The players vote on a topic category for a set amount of
              questions. The difficulty of those questions will be randomly
              chosen for every round (including an event explained later).
            </span>
          </li>
          <li className="list-item">
            <span>Question types:</span>
            <ol className="rules-question-types-list list">
              <li className="list-item">
                <span>4 Options: one of them is correct.</span>
              </li>
              <li className="list-item">
                <span>
                  True/False: should be self-explanatory, the clue is in the
                  name.
                </span>
              </li>
              <li className="list-item">
                <span>
                  Voting: All players vote on a topic and the majority wins
                  (randomly selected if there is a tie possible).
                </span>
              </li>
              <li className="list-item">
                <span>
                  Event: This takes place instead of the question and only
                  happens rarely. It redistributes the players according to
                  their placement to even out the playingfield.
                </span>
              </li>
            </ol>
          </li>
          <li className="list-item">
            <span>Text</span>
          </li>
          <li className="list-item">
            <span>Text</span>
          </li>
          <li className="list-item">
            <span>Text</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Rules
