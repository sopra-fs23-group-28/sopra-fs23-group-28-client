import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/question4-options.scss'

const Question4Options = (props) => {
  return (
    <div className="question-options-container">
      <Helmet>
        <title>Question4-Options - SoPra Mockups</title>
        <meta property="og:title" content="Question4-Options - SoPra Mockups" />
      </Helmet>
      <div className="question-options-container1">
        <h1 className="question-options-text">
          <span>Question</span>
          <br></br>
        </h1>
      </div>
      <div className="question-options-container2">
        <button className="question-options-button button">
          <p className="question-options-text03">
            <span>Option 1</span>
            <br></br>
          </p>
        </button>
        <button className="question-options-button1 button">
          <p className="question-options-text06">
            <span>Option2</span>
            <br></br>
          </p>
        </button>
        <button className="question-options-button2 button">
          <p className="question-options-text09">
            <span>Option3</span>
            <br></br>
          </p>
        </button>
        <button className="question-options-button3 button">
          <p className="question-options-text12">
            <span>Option4</span>
            <br></br>
          </p>
        </button>
      </div>
    </div>
  )
}

export default Question4Options
