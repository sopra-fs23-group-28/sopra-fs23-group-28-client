/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import 'styles/views/race.scss'
import Profil from './helpers/profil';
import Court from './court';
const Steps = styled.div`
flex: 1;
width: 70vw;
height: auto;
display: flex;
flex-direction: column;
font-size: 3vw;
text-align: center;
word-spacing: ${props => (props.ls) + 'vw'};
align-content: center;
align-items: center;
white-space: nowrap;
@media (max-width: 968px) {
  font-size: 4vw;
  text-align: center;
  word-spacing: ${props => (props.ls) + 'vw'};
}
`;


const Race = (props) => {
  // Create State Objects
  const [state, setState] = useState({ startB: false, users: null, lobby: null });
  const [users, setUsers] = useState(null);
  const [arr, setArr] = useState(1);
  const [maxSteps, setMaxSteps] = useState(['0', '1 ', '2 ', '3 ', '4 ', '5 ']);
  const [punishmentSteps, setPunishmentSteps] = useState(0);
  const space = [[10.6, 8.4, 6.5, 5.6, 4.7, 3.8, 2.8, 1.6, 1.3, 0.6, 0], [0, 0, 0, 4.4, 3.4, 2.2, 1.4, 0.8, 0, 0, 0]]

  // setup Socket from overview
  const { socket } = props;


  useEffect(() => {
    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    const fetchData = async () => {
      api.get('/users/' + localStorage.getItem('pin')).then(getU => {
        if (isMounted) {
          const temp = state
          temp.users = getU.data
          setState(temp)
          setUsers(getU.data)
        }
      })

      api.get('/lobbies/' + localStorage.getItem('pin')).then(data => {
        if (isMounted) {
          const temp = state
          temp.lobby = data.data
          setState(temp)
          setMaxSteps(renderSteps(temp.lobby.maxSteps))
          setPunishmentSteps(temp.lobby.punishmentSteps)
          if (data.data.roundNumber % 4 === 0 && parseInt(localStorage.getItem('deg')) === 0 && parseInt(data.data.creatorId) === parseInt(localStorage.getItem('id')) && props.punishment === 0) {
            spin()
          }
          if (data.data.roundNumber % 4 !== 0) {
            localStorage.setItem('deg', 0)
          }
        }
      })
    }
    
    fetchData()
    // Clean-up:    
    return () => {
      isMounted = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);


  const setReady = () => {
    const room = localStorage.getItem('pin')
    socket.emit("READY", { room });
  }

  const renderSteps = (maxSteps) => {
    let steps = []
    let a = 1
    if (maxSteps > 15) {
      a = 2
      setArr(2)
    }
    for (let i = 0; i <= maxSteps; i = i + a) {
      steps.push(i + ' ');
    }
    return steps
  }

  // Every 3 Round the difficulty is set
  const spin = async () => {
    // generate random number between 1 - 360 for selection
    const angle = (Math.floor(Math.random() * (360 - 1 + 1)) + 1)
    const difficultyWheelDegree = angle
    const token = localStorage.getItem('token')
    const requestBody = JSON.stringify({ token, difficultyWheelDegree, angle })
    try {
      await api.put('/lobbies/' + localStorage.getItem('pin') + '/difficulties', requestBody)
    } catch (e) {
      alert(`Something went wrong during the transmission: \n${e}`)
    }
  }


  return (
    <>
      <div className="overview-container01">
        <div className="overview-container02">
          {users && users[0] && <Profil user={users[0]} showState={true} />}
        </div>
        <div className="overview-container04">
          {users && users[1] && <Profil user={users[1]} showState={true} />}
        </div>
      </div><div className="race-container06">
        <button className="overview-button button" onClick={() => setReady()}>Ready</button>
        {users && <Court users={users} maxSteps={maxSteps.length} punishmentSteps={punishmentSteps} />}
        <div className="race-container12">
          <Steps ls={(space[arr - 1][maxSteps.length - 6])}> {maxSteps}</Steps>
        </div>
        <div className="race-container12">
          <h3>Start</h3>
          <h3>Finish</h3>
        </div>
      </div><div className="overview-container01">
        <div className="overview-container02">
          {users && users[2] && <Profil user={users[2]} showState={true} />}
        </div>
        <div className="overview-container04">
          {users && users[3] && <Profil user={users[3]} showState={true} />}
        </div>
      </div>
    </>
  )
}

export default Race
