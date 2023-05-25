import React from 'react'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <><div className="rules-container">
      <div className="rules-main-div" onClick={() => props.setRules(false)}>
        <h1 className="rules-titel">The Rules</h1>
        <ol className="rules-rules-text list">
          <li className="list-item">
            The game can be played with 2-4 players. The host can start the
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
            The last player gets punished by an amount of steps that were set by the loser
            of the previous round.
            Assuming they answered correctly, the first user advances 5 steps, the second advances 4 steps,
            the third advances 3 steps. Incorrect answers (except the last user) get 0 points.
            The steps distributed get adjusted by the number of players.
              <li className="list-item">
                Question type: 4 Options: Always one of them is correct.
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
          </li>
        </ol>
      </div>
    </div>
    {/* <div className="rules-container" onClick={() => props.setRules(false)}></div> */}
      </>
  )
}

export default Rules
