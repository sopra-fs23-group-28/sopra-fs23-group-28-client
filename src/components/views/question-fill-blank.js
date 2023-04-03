import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/question-fill-blank.scss'

const QuestionFillBlank = (props) => {
  return (
    <div className="question-fill-blank-container">
      <Helmet>
        <title>QuestionFill-Blank - SoPra Mockups</title>
        <meta
          property="og:title"
          content="QuestionFill-Blank - SoPra Mockups"
        />
      </Helmet>
      <div className="question-fill-blank-container1">
        <h1 className="question-fill-blank-text">Topic(MajorityWins)</h1>
      </div>
      <div className="question-fill-blank-container2"></div>
    </div>
  )
}

export default QuestionFillBlank
