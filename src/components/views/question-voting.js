import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/question-voting.scss'

const QuestionVoting = (props) => {
  return (
    <div className="question-voting-container">
      <Helmet>
        <title>QuestionVoting - SoPra Mockups</title>
        <meta property="og:title" content="QuestionVoting - SoPra Mockups" />
      </Helmet>
      <div className="question-voting-container1">
        <h1 className="question-voting-text">Topic(MajorityWins)</h1>
      </div>
      <div className="question-voting-container2"></div>
    </div>
  )
}

export default QuestionVoting
