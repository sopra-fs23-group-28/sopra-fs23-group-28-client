import React from 'react'

import 'styles/views/question-true-false.scss'

const QuestionTrueFalse = (props) => {

  // here handle true/false with a consisten placement
  let answerChoice = NaN
  let timer = 0.00

  const handleClick = (i) => {
    document.getElementsByClassName("question-true-false-answer-true button")[0].disabled=true;
    document.getElementsByClassName("question-true-false-answer-false button")[0].disabled=true;

    document.getElementsByClassName(`question-true-false-answer-${i} button`)[0].name="selected";
    
    i === "true" ? answerChoice = 1 : answerChoice = 2;
  }

  return (
    <div className="question-true-false-container">
      <div className="question-true-false-question-div">
        <h1 className="question-true-false-question">
          Question?
          <br></br>
          How long can you make this without breaking the box?Or does it
          readjust the size automatically?
        </h1>
      </div>
      <div className="question-true-false-answers-div">
        <button className="question-true-false-answer-true button"
          onClick={() => handleClick("true")}>
          <p className="question-true-false-answer-text">True</p>
        </button>
        <button className="question-true-false-answer-false button"
          onClick={() => handleClick("false")}
          disabled={false}>
          <p className="question-true-false-answer-text">False</p>
        </button>
      </div>
    </div>
  )
}

export default QuestionTrueFalse
