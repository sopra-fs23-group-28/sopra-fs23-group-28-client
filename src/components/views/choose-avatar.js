import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/choose-avatar.scss'

const ChooseAvatar = (props) => {
  return (
    <div className="choose-avatar-container">
      <Helmet>
        <title>ChooseAvatar - SoPra Mockups</title>
        <meta property="og:title" content="ChooseAvatar - SoPra Mockups" />
      </Helmet>
      <div className="choose-avatar-container1">
        <h1 className="choose-avatar-login-text">Heading</h1>
        <span className="choose-avatar-text">
          <span>logindescription</span>
          <br></br>
        </span>
        <div className="choose-avatar-container2">
          <div className="choose-avatar-container3">
            <img
              alt="image1"
              src="/playground_assets/bluecamel-200h.gif"
              className="choose-avatar-image"
            />
          </div>
          <div className="choose-avatar-container4">
            <img
              alt="image2"
              src="/playground_assets/greencamel-200h.gif"
              className="choose-avatar-image1"
            />
          </div>
        </div>
        <div className="choose-avatar-container5">
          <div className="choose-avatar-container6">
            <img
              alt="image3"
              src="/playground_assets/redcamel-200h.gif"
              className="choose-avatar-image2"
            />
          </div>
          <div className="choose-avatar-container7">
            <img
              alt="image4"
              src="/playground_assets/purplecamel-200h.gif"
              className="choose-avatar-image3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseAvatar
