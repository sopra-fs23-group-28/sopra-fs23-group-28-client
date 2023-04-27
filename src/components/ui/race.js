import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import 'styles/views/race.scss'
import Profil from './helpers/profil';
import Court from './court';
const Steps = styled.div`
flex: 1;
width: auto;
height: auto;
display: flex;
flex-direction: column;
font-size: 35px;
text-align: center;
word-spacing: ${props => (2 * props.ls) + 'vw'};
align-content: center;
align-items: center;
white-space: nowrap;
@media (max-width: 968px) {
  font-size: 20px;
  text-align: center;
  word-spacing: ${props => (props.ls) + 'vw'};
}
`;


const Race = (props) => {
  // Create State Objects
  const [state, setState] = useState({ startB: false, users: null, lobby: null });
  const [users, setUsers] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [lobby, setLobby] = useState(null);
  const [maxSteps, setMaxSteps] = useState(['1 ', '2 ', '3 ', '4 ', '5 ']);
  // setup Socket from overview
  const { socket } = props;


  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    socket.on("READY", (s) => {
      if (s.message === 'GETCATEGORY') {
        props.setGameState('gc')
      }
      if (s.message === 'GETQUESTION') {
        props.setGameState('gc')
      }

    });

    
    socket.on("FINISH", (s) => {
      console.log(s)
      if (s.message === 'FINISH') {
        props.setGameState('wi')
      }

    });

    const fetchData = () => {

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
          let steps = []

          for (var i = 1; i <= temp.lobby.maxSteps - 1; i++) {
            steps.push(i + ' ');
          }
          setMaxSteps(steps)
          setLobby(data.data)

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
    socket.emit("READY", { room },);

  }

  // temporär für Winnerscreen
  const handleKeyDown = (event) => {
      props.setGameState('wi');
      console.log('Key down: ')
  }

  return (

    <>
    <div 
      onKeyDown={handleKeyDown}
      tabIndex="0">
    <div className="overview-container01">
      <div className="overview-container02">
        {users && users[0] && <Profil user={users[0]} showState={true} />}
      </div>
      <div className="overview-container04">
        {users && users[1] && <Profil user={users[1]} showState={true} />}
      </div>
    </div><div className="race-container06">

        <button className="overview-button button" onClick={() => setReady()}>Ready</button>
        {users && <Court users={users} maxSteps={maxSteps.length} />}
        <div className="race-container12">
          <h1>Start</h1>
          <Steps ls={(25 / ((maxSteps.length < 10) ? maxSteps.length : maxSteps.length * 2))}> {maxSteps}</Steps>
          <h1>Finish</h1>
        </div>
      </div><div className="overview-container07">
        <div className="overview-container08">
          {users && users[2] && <Profil user={users[2]} showState={true} />}
        </div>
        <div className="overview-container10">
          {users && users[3] && <Profil user={users[3]} showState={true} />}
        </div>
      </div>
      </div>
      </>
  )
}

export default Race
