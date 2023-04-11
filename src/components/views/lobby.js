import { useEffect, useState } from 'react';
import { api, handleError } from 'helpers/api';
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom';
import Loader from 'components/ui/loader'

import 'styles/views/lobby.scss'
const Lobby = (props) => {


  // use react-router-dom's hook to access the history
  const history = useHistory();

  const logout = async () => {
    const id = parseInt(localStorage.getItem('token'));
    console.log(JSON.stringify({ id }));
    const requestBody = JSON.stringify({ id });

    localStorage.removeItem('token');
    const response = await api.post('/logout', requestBody);
    console.log(response);
    history.push('/login');
  }


  const newGame = async () => {
    const token = localStorage.getItem('token');
    console.log(JSON.stringify({ token }));
    const requestBody = JSON.stringify({ token });
    const response = await api.post('/lobbies', requestBody);
    console.log(response);
    
    localStorage.setItem('pin', response.data.id);
    history.push('/overview/'+response.data.id);
  }
  const joinGame = async () => {
    const id = parseInt(localStorage.getItem('token'));
    console.log(JSON.stringify({ id }));
    const requestBody = JSON.stringify({ id });
    const response = await api.put('/lobbies', requestBody);
    console.log(response);
    history.push('/overview');
  }







  return (
    <div className="lobby-container">
      <Helmet>
        <title>Lobby - SoPra Mockups</title>
        <meta property="og:title" content="Lobby - SoPra Mockups" />
      </Helmet>
      <div className="lobby-container1">
        <div className="lobby-container2">
          <div className='lobby-loader'>
            <Loader />
          </div>
        </div>
        <h1 className="lobby-text1">Lobby</h1>
        <div className="lobby-btn-group">
          <button className="lobby-logout button" onClick={() => logout()}>Logout</button>
        </div>
      </div>
      <div className="lobby-container4">
        <div className="lobby-btn-group1">
          <button className="lobby-new-game button" onClick={() => newGame()}>New Game</button>
          <button className="lobby-join-game button" onClick={() => joinGame()}>Join Game</button>
        </div>
      </div>
    </div>
  )
}

export default Lobby
