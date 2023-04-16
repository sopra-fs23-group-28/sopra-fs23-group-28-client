import React from 'react'
import { api, handleError } from 'helpers/api';
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'

import 'styles/views/big-screen-view.scss'


const BigScreenView = (props) => {
  const navigate = useNavigate();
  // get PIN and check it for initialized lobbies
  const {pin} = useParams();
  const checkPin = async () => {
    try {
      const response = await api.get('/lobbies', pin);
      for (const lobby of response){
        if (lobby.id === pin){
          return true
        }
      }
      return false
    } catch (error){
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
  };


  if (checkPin) {
    return (
      <div className="big-screen-view-container">
        <Helmet>
          <title>BigScreen-View - SoPra Mockups</title>
          <meta property="og:title" content="BigScreen-View - SoPra Mockups" />
        </Helmet>
      </div>
    )
  } else{
    alert("There is currently no active lobby with this associated PIN");
    navigate("/");
  }
}

export default BigScreenView
