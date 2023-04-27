import React from 'react'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <><div className="rules-container">
      <div className="rules-main-div" onClick={() => props.setRules(false)}>
        <h1 className="rules-titel">The Rules</h1>
        <ol className="rules-rules-text list">
          <li className="list-item">
            The game can be played with 4 players. The host can start the
            game as soon as all players are in the lobby.
          </li>
          <li className="list-item">
            The host decides on the length of the game by setting the number of
            total steps that the game will be played for.
          </li>
          {/* The difficulty of those questions will be randomly
          chosen for every round (including an event explained later). */}
          <li className="list-item">
            The players vote on a topic category for a set amount of
            questions.
          </li>
          <li className="list-item">
            The first player to answer correctly gets 3 points (steps), 2nd 2 points,
            3rd 1 point and the 4th -1 point; all under the assumption that everyone answered
            correctly. A wrong answer will always yield -1 point (can not go under 0).
          </li>
          <li className="list-item">
            Question types:
            <ol className="rules-question-types-list list">
              <li className="list-item">
                4 Options: one of them is correct.
              </li>
              {/* <li className="list-item">
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
              </li> */}
            </ol>
          </li>
        </ol>
      </div>
    </div>
    {/* <div className="rules-container" onClick={() => props.setRules(false)}></div> */}
      </>
  )
}

export default Rules
