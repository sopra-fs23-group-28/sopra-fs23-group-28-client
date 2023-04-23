import React from 'react'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <div className="rules-container">
      <div className="rules-main-div">
        <h1 className="rules-titel">The Rules</h1>
        <ol className="rules-rules-text list">
          <li className="list-item">
            This is the first rule and contains some shite pertaining to not
            kissing the camels or whatever.
          </li>
          <li className="list-item">
            The game can be played with 2-4 players. The host can start the
            game as soon as at least 2 players are in the lobby.
          </li>
          <li className="list-item">
            The players vote on a topic category for a set amount of
            questions. The difficulty of those questions will be randomly
            chosen for every round (including an event explained later).
          </li>
          <li className="list-item">
            Question types:
            <ol className="rules-question-types-list list">
              <li className="list-item">
                4 Options: one of them is correct.
              </li>
              <li className="list-item">
                True/False: should be self-explanatory, the clue is in the
                name.
              </li>
              <li className="list-item">
                Voting: All players vote on a topic and the majority wins
                (randomly selected if there is a tie possible).
              </li>
              <li className="list-item">
                Event: This takes place instead of the question and only
                happens rarely. It redistributes the players according to
                their placement to even out the playingfield.
              </li>
            </ol>
          </li>
          <li className="list-item">
            Text
          </li>
          <li className="list-item">
            Text
          </li>
          <li className="list-item">
            Text
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Rules
