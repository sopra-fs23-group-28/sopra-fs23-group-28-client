import React from 'react'

import { Helmet } from 'react-helmet'
import "styles/ui/Waitingroom.scss";


const profil = (user) => {
  <div className="overview-container02">
        <div className="overview-container03">
          <img
            src="/playground_assets/bluecamel-200h.gif"
            className="overview-image" />
        </div>
        <h1 className="overview-text">{user.userName}</h1>
      </div>
}

export const Waitingroom = props => {


  return (
      <><div className="overview-container01">
      <div className="overview-container02">
        <div className="overview-container03">
          <img
            alt="image1"
            src="/playground_assets/bluecamel-200h.gif"
            className="overview-image" />
        </div>
        <h1 className="overview-text">Heading</h1>
      </div>
      <div className="overview-container04">
        <div className="overview-container05">
          <img
            alt="image2"
            src="/playground_assets/bluecamel-200h.gif"
            className="overview-image1" />
        </div>
        <h1 className="overview-text1">Heading</h1>
      </div>
    </div><div className="overview-container06">
        <h1>Heading</h1>
        <div className="overview-btn-group">
          <button className="overview-start-game button">StartGame</button>
          <button className="overview-exit-game button">ExitGame</button>
        </div>
      </div><div className="overview-container07">
        <div className="overview-container08">
          <div className="overview-container09">
            <img
              alt="image3"
              src="/playground_assets/bluecamel-200h.gif"
              className="overview-image2" />
          </div>
          <h1 className="overview-text3">Heading</h1>
        </div>
        <div className="overview-container10">
          <div className="overview-container11">
            <img
              alt="image4"
              src="/playground_assets/bluecamel-200h.gif"
              className="overview-image3" />
          </div>
          <h1 className="overview-text4">Heading</h1>
        </div>
      </div></>

  );
};
