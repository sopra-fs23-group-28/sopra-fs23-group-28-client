import React from 'react'

import 'styles/views/rules.scss'

const Rules = (props) => {
  return (
    <>
      <div className="rules-container">
        <div className="rules-main-div" onClick={() => props.setRules(false)}>
          <button className="close">X</button>
          <h1 className="rules-titel">The Rules</h1>
          <ol className="rules-rules-text list">
            <li className="rules-item">
              The game can be played with 2-4 players. The host can start the
              game as soon as there are 2 players in the lobby.
            </li>
            <li className="rules-item">
              The host decides on the length of the game by setting the number of
              total steps that the game will be played for.
            </li>
            <li className="rules-item">
              The difficulty of those questions will be randomly chosen for 4 rounds.
            </li>
            <li className="rules-item">
              The players vote on a topic category for each question.
            </li>
            <li className="rules-item">
              The last player gets punished by an amount of steps that was set by 
              the loser of the previous round.<br/>
              Assuming they answered correctly, the fastest user advances 5 steps, 
              the second advances 4 steps and the third advances 3 steps.<br/>
              Incorrect answers (except the last user) get 0 points.<br/>
              The awarded steps get adjusted by the number of players (still assuming 
              a correct answer):<br/>
              3 players (4, 3, loser)<br/>
              2 players (3, loser)
            </li>
            <li>
              There is currently one question type
              <ol className="rules-question-types-list list">
                <li className="rules-item">
                  <b>4 Options</b>: One of them is correct.
                </li>
                {/* <li className="rules-item">
                  True/False: should be self-explanatory, the clue is in the
                  name.
                </li>
                <li className="rules-item">
                  Voting: All players vote on a topic and the majority wins
                  (randomly selected if there is a tie possible).
                </li>
                <li className="rules-item">
                  Event: This takes place instead of the question and only
                  happens rarely. It redistributes the players according to
                  their placement to even out the playingfield.
                </li> */}
              </ol>
            </li>
            <li>
              The best 3 players will be displayed on a podium at the end of the game.
            </li>
          </ol>
        </div>
      </div>
      {/* <div className="container" onClick={() => props.setRules(false)}></div> */}
    </>
  )
}

export default Rules
