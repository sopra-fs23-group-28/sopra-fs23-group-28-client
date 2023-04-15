import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/question-true-false.scss'

const QuestionTrueFalse = (props) => {
  return (
    <div className="question-true-false-container">
      <Helmet>
        <title>QuestionTrueFalse - SoPra Mockups</title>
        <meta property="og:title" content="QuestionTrueFalse - SoPra Mockups" />
      </Helmet>
      <div className="question-true-false-container1">
        <h1 className="question-true-false-text">
          <span>Question</span>
          <br></br>
        </h1>
      </div>
      <div className="question-true-false-container2">
        <input type="radio" name="radio" />
        <input type="radio" name="radio" />
      </div>
    </div>
  )
}

export default QuestionTrueFalse
