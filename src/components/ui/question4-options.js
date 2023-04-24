import React from 'react'

import 'styles/views/question4-options.scss'

const Question4Options = (props) => {

  let answerChoice = NaN
  let timer = 0.00
console.log(answerChoice, timer)

  const handleCLick = (i) => {
    // disable all buttons
    document.getElementsByClassName("question4-options-answer1 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer2 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer3 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer4 button")[0].disabled=true;

    // for highlighting the selected button
    document.getElementsByClassName(`question4-options-answer${i} button`)[0].name="selected";

    // save answer
    answerChoice = i
  }

  return (
    <div className="question4-options-container">
      <div className="question4-options-question-div">
        <h1 className="question4-options-question">
          Question?
          <br></br>
          How long can you make this without breaking the box?
          Or does it readjust the size automatically?
        </h1>
      </div>
      <div className="question4-options-answers-div">
        <button className="question4-options-answer1 button"
          onClick={() => handleCLick(1)}>
          <p className="question4-options-answer-text">
            Option 1
          </p>
        </button>
        <button className="question4-options-answer2 button"
          onClick={() => handleCLick(2)}>
          <p className="question4-options-answer-text">
            Option2
          </p>
        </button>
        <button className="question4-options-answer3 button"
          onClick={() => handleCLick(3)}>
          <p className="question4-options-answer-text">
            Option3
          </p>
        </button>
        <button className="question4-options-answer4 button"
          onClick={() => handleCLick(4)}>
          <p className="question4-options-answer-text">
            Option4
          </p>
        </button>
      </div>
    </div>
  )
}

export default Question4Options
