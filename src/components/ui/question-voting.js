import React from 'react'

import 'styles/views/question-voting.scss'

const QuestionVoting = (props) => {

  function handleClick(i) {
    document.getElementsByClassName("question-voting-option1 button").disabled=true;
    document.getElementsByClassName("question-voting-option2 button").disabled=true;

    document.getElementsByClassName(`question-voting-option${i} button`);
  }

  return (
    <div className="question-voting-container">
      <div className="question-voting-question-div">
        <h1 className="question-voting-question">
          Topic
          <br></br>
          (Majority wins)
        </h1>
      </div>
      <div className="question-voting-options-div">
        <button className="question-voting-option1 button"
          onClick={handleClick("1")}
          disabled={false}>
          <p className="question-voting-option-text">Option 1</p>
        </button>
        <button className="question-voting-option2 button"
          onClick={handleClick("2")}
          disabled={false}>
          <p className="question-voting-option-text">Option 2</p>
        </button>
      </div>
    </div>
  )
}

export default QuestionVoting
