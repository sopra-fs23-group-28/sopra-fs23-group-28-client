import { useState } from 'react';
import { api } from 'helpers/api';
import { Navigate, useNavigate } from 'react-router-dom';
import Pin from 'components/ui/enter-pin';

import 'styles/views/lobby.scss'


const Lobby = (props) => {
  const [visible, setVisible] = useState(false)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  api.get('/external-ip').then(data => {
    localStorage.setItem('ip', data.data)
  })

  const logout = async () => {
    const requestBody = { data: { token } };

    localStorage.removeItem('token')
    localStorage.removeItem('deg')
    localStorage.removeItem('pin')
    localStorage.removeItem('avatar')
    localStorage.removeItem('id')
    await api.delete('/users', requestBody).catch(err => {
      navigate('/')
    });
    navigate('/')
  }

  const newGame = async () => {
    localStorage.setItem('deg',0)
    const requestBody = JSON.stringify({ token })
    const response = await api.post('/lobbies', requestBody)
    localStorage.setItem('pin', response.data.id)
    changeLobby(response.data.id)
  }

  const joinGame = async (pin) => {
    const requestBody = JSON.stringify({ token })
    await api.put('/lobbies/' + pin + '/users', requestBody)
    localStorage.setItem('pin', pin)
    changeLobby(pin)
  }

  const changeLobby = (pin) => {
    navigate(`/game/${pin}/avatar`)
  }

  const showPin = () => {
    setVisible(true)
  }

  const hidePin = () => {
    if (visible) {
      setVisible(false)
    }
  }

  const checkUser = () => {
    return (localStorage.token && localStorage.id && localStorage.user);
  }

  if (!checkUser()) {
    return <Navigate to={"/"} />
  } else {
    return (
      <div className="lobby-container" >
        <div className="lobby-header-div" onClick={() => hidePin()}>
          <svg className="logo" width="505.33332542136864" height="521.75999145507814" viewBox="0 0 550 570" >
            <g xmlns="http://www.w3.org/2000/svg">
              <path d="M231.9,64.3c-28.8-10.2-57.4-1.1-65.1,20.7c-7.7,21.7,8.7,46.8,37.4,57c0,0,0.2,0.1,0.2,0.1c28.8,10.2,57.4,1.1,65.1-20.7   C277.1,99.7,260.7,74.6,231.9,64.3z M242.6,111.9c-1.7,4.8-14,8.6-28.8,3.3l-0.1,0c-14.7-5.2-21.8-15.9-20.1-20.7   c1.7-4.8,14-8.6,28.9-3.3C237.1,96.4,244.3,107.1,242.6,111.9z"></path>
              <path d="M505.6,183c-5-10.1-10.7-22.2-14.5-35c-11.3-38.4-36.1-78.7-134.5-87.2c-19.5-1.7-40.1-18.9-51.1-28.2   c-3.4-2.8-6.2-5.1-8.2-6.6C262.2,1.4,217-4.1,176.2,11.5C147,22.6,121.2,37.7,99.3,56.4c-24.3-2.8-57,1-91.6,27.2   c-4.8,3.6-6.8,9.9-5,15.7c0.5,1.6,8.7,26.2,34.5,44.2c-14.7,37.4-15.3,78.2-15.2,78.8c0,0.6,5,59-19.7,189.4C2.1,412.6,2,495,2,495   c0,11,10.5,14.2,14.2,14.2h0.1l319.7-2.6c4.6,0,8.8-2.2,11.5-6c19.6-27.4,17.2-85.9-7.1-174.1c-6.2-22.5,3.8-46.7,23.9-57.4   c30-16,69.9,0.6,71.5,0.7c17.7,1.4,30.7-2.7,38.6-12.3c4.9-5.9,6.6-12.4,7.1-18c8.8-4.6,20.7-13,25.9-25.8   C511.4,204.1,510.8,193.4,505.6,183z M481,203.1c-2.2,5.4-10.2,10.3-15.8,12.8c-44.1-26.3-102.7-45.6-105.2-46.5   c-7.5-2.5-15.5,1.6-18,9.1c-2.4,7.5,1.6,15.5,9.1,18c0.6,0.2,58.4,19.3,99.8,44c-2.8,1.4-9.8,2.9-25.2-3.3   c-45.1-18.8-81.1-12.9-96.8-7.4c-5.3,1.8-12.3,4.1-19.3,5.7c-90.3,19.8-107.8-13.8-108.5-15.2c-2.8-7.1-10.9-10.8-18.1-8.1   c-7.4,2.7-11.9,11.2-8.5,18.2c26.9,56.4,118.7,37.8,141.2,32.9c5.6-1.2,11-2.8,15.8-4.3c-18.4,19.5-26.1,48.1-18.6,75.2   c18.9,68.3,24.1,121,14.6,144l-297.1,2.4v-64.9c23.7-125.3,20.6-185.9,20-194.9c1.2-23.2,5.5-44.8,12.7-64.5   c11.4,3.8,24.7,6.2,40.4,6.2c7.9,0,14.2-6.4,14.2-14.2s-6.4-14.2-14.2-14.2c-42,0-61.4-21.4-69.2-34.2c49.1-30.5,89.6-7.1,91.5-6   c6.7,4.1,15.4,2,19.5-4.7c4.1-6.7,2-15.5-4.7-19.6c-0.5-0.3-2.9-1.7-7-3.6c15.7-11.1,33.2-20.5,52.6-27.8   c31.9-12.2,67.3-8,94.6,11.2c1.6,1.1,3.7,2.9,6.3,5.1c13.5,11.3,38.5,32.3,67,34.7c46.8,4.1,72.7,15.6,87.6,28.8l-20.5-2.3   c-7.7-0.9-14.9,4.7-15.8,12.5c-0.9,7.8,4.7,14.9,12.5,15.8l43.5,4.9c0.8,2.5,1.6,5,2.2,7.2c4.4,14.9,10.7,28.4,16.3,39.6   C482.3,200,481.4,202.2,481,203.1z"></path>
            </g>
          </svg>
          <h1 className="lobby-lobby-title">Lobby</h1>
          <button className="lobby-logout button" onClick={() => logout()}>Logout</button>
        </div>
        <div className="lobby-hero-div" onClick={() => hidePin()}>
          <div className="lobby-btn-group">
            <button className="lobby-new-game button" onClick={() => newGame()}>New Game</button>
            <button className="lobby-join-game button"
              onClick={() => showPin()}>Join Game</button>
          </div>
        </div>
        {visible && <Pin joinGame={joinGame} />}
      </div>
    )
  }
}

export default Lobby
