import React from 'react'

import 'styles/views/question4-options.scss'

const Question4Options = (props) => {

  function handleCLick(i){
    // disable all buttons
    document.getElementsByClassName("question4-options-answer1 button").disabled=true;
    document.getElementsByClassName("question4-options-answer2 button").disabled=true;
    document.getElementsByClassName("question4-options-answer3 button").disabled=true;
    document.getElementsByClassName("question4-options-answer4 button").disabled=true;

    // handle answer
    document.getElementsByClassName(`question4-options-answer${i} button`);
  }

  return (
    <div className="question4-options-container">
      <div className="question4-options-question-div">
        <h1 className="question4-options-question">
          Question?
          <br></br>
          How long can you make this without breaking the box? Or does it
          readjust the size automatically?
        </h1>
      </div>
      <div className="question4-options-answers-div">
        <button className="question4-options-answer1 button"
          onClick={handleCLick("1")}
          disabled={false}>
          <p className="question4-options-answer-text">
            Option 1
          </p>
        </button>
        <button className="question4-options-answer2 button"
          onClick={handleCLick("2")}
          disabled={false}>
          <p className="question4-options-answer-text">
            Option2
          </p>
        </button>
        <button className="question4-options-answer3 button"
          onClick={handleCLick("3")}
          disabled={false}>
          <p className="question4-options-answer-text">
            Option3
          </p>
        </button>
        <button className="question4-options-answer4 button"
          onClick={handleCLick("4")}
          disabled={false}>
          <p className="question4-options-answer-text">
            Option4
          </p>
        </button>
      </div>
    </div>
  )
}

export default Question4Options
