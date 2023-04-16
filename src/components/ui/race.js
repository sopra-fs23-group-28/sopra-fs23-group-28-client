import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/race.scss'

const Race = (props) => {
  return (
    <div className="race-container">
      <Helmet>
        <title>Race - SoPra Mockups</title>
        <meta property="og:title" content="Race - SoPra Mockups" />
      </Helmet>
      <div className="race-container01">
        <div className="race-container02">
          <div className="race-container03">
            <img
              alt="image"
              src="/playground_assets/bluecamel-300w.gif"
              className="race-image"
            />
          </div>
          <h1 className="race-text">Heading</h1>
        </div>
        <div className="race-container04">
          <div className="race-container05">
            <img
              alt="image"
              src="/playground_assets/bluecamel-300w.gif"
              className="race-image1"
            />
          </div>
          <h1 className="race-text1">Heading</h1>
        </div>
      </div>
      <div className="race-container06">
        <div className="race-container07">
          <img
            alt="image"
            src="/playground_assets/tribune-900w.png"
            className="race-image2"
          />
        </div>
        <div className="race-container08">
          <img
            alt="image"
            src="/playground_assets/greencamel-300w.gif"
            className="race-image3"
          />
        </div>
        <div className="race-container09">
          <img
            alt="image"
            src="/playground_assets/purplecamel-300w.gif"
            className="race-image4"
          />
        </div>
        <div className="race-container10">
          <img
            alt="image"
            src="/playground_assets/redcamel-300w.gif"
            className="race-image5"
          />
        </div>
        <div className="race-container11">
          <img
            alt="image"
            src="/playground_assets/redcamel-300w.gif"
            className="race-image6"
          />
        </div>
        <div className="race-container12">
          <h1>Heading</h1>
          <h1>Heading</h1>
        </div>
      </div>
      <div className="race-container13">
        <div className="race-container14">
          <div className="race-container15">
            <img
              alt="image"
              src="/playground_assets/bluecamel-300w.gif"
              className="race-image7"
            />
          </div>
          <h1 className="race-text4">Heading</h1>
        </div>
        <div className="race-container16">
          <div className="race-container17">
            <img
              alt="image"
              src="/playground_assets/bluecamel-300w.gif"
              className="race-image8"
            />
          </div>
          <h1 className="race-text5">Heading</h1>
        </div>
      </div>
    </div>
  )
}

export default Race
