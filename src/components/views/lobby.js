import { useState } from 'react';
import { api } from 'helpers/api';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/ui/loader';
import Pin from 'components/ui/enter-pin';

import 'styles/views/lobby.scss'


const Lobby = (props) => {
  const [visible, setVisible] = useState(false);
  const token = localStorage.getItem('token');
  // use react-router-dom's hook to access the navigate
  const navigate = useNavigate();

  const logout = async () => {
    const requestBody = {data: { token }};

    localStorage.removeItem('token');
    localStorage.removeItem('pin');
    localStorage.removeItem('avatar');
    localStorage.removeItem('id');
    const response = await api.delete('/users', requestBody);
    // console.log(response);
    navigate('/');
  }

  const newGame = async () => {
    // console.log(JSON.stringify({ token }));
    const requestBody = JSON.stringify({ token });
    const response = await api.post('/lobbies', requestBody);
    // console.log(response);

    localStorage.setItem('pin', response.data.id);
    changeLobby(response.data.id);
  }

  const joinGame = async (pin) => {
    // console.log(JSON.stringify({ token }));
    // console.log(JSON.stringify({ pin }));
    const requestBody = JSON.stringify({ token });
    const response = await api.put('/lobbies/' + pin +'/users', requestBody);
    // console.log(response);
    localStorage.setItem('pin', pin);
    changeLobby(pin);
  }

  const changeLobby = (pin) => {
  navigate(`/game/${pin}/avatar`);
  }

  const showPin = () => {
    console.log("click")
    setVisible(true)
  }

  const hidePin = () => {
    if (visible) {
      setVisible(false) 
      console.log(visible)
    }
  }


  return (
    <div className="lobby-container" >
      <div className="lobby-header-div" onClick={()=>hidePin()}>
        <div className="lobby-camel-preview-div">
          <div className="lobby-camel-div">
            <div className='lobby-loader'>
              <Loader />
            </div>
          </div>
        </div>

        <h1 className="lobby-lobby-title">Lobby</h1>
        <div className="lobby-logout-div">
          <button className="lobby-logout button" onClick={() => logout()}>Logout</button>
        </div>
      </div>
      <div className="lobby-hero-div" onClick={()=>hidePin()}>
        <div className="lobby-btn-group">
          <button className="lobby-new-game button" onClick={() => newGame()}>New Game</button>
          <button className="lobby-join-game button"
            onClick={() => showPin()}>Join Game</button>
        </div>
      </div>
      {visible && <Pin joinGame={joinGame}/>}
    </div>
  )
}

export default Lobby
