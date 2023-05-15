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
word-spacing: ${props => (4 * props.ls) + 'vw'};
align-content: center;
align-items: center;
white-space: nowrap;
@media (max-width: 968px) {
  font-size: 4vw;
  text-align: center;
  word-spacing: ${props => (4*props.ls) + 'vw'};
}
`;


const Race = (props) => {
  // Create State Objects
  const [state, setState] = useState({ startB: false, users: null, lobby: null });
  const [users, setUsers] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [lobby, setLobby] = useState(null);
  const [maxSteps, setMaxSteps] = useState(['0','1 ', '2 ', '3 ', '4 ', '5 ']);
  const space = [[10.6,8.4,6.5,5.6,4.7,3.8,2.8,1.6,1.3,0.6,0],[0,0,0,4.4,3.4,2.2,1.4,1,0,0,0]]
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
          let a=1
          if (temp.lobby.maxSteps > 15) {
            a=2
          }
          for (var i = 0; i <= temp.lobby.maxSteps; i=i+a) {
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
        {users && <Court users={users} maxSteps={maxSteps.length} />}
        <div className="race-container12">
          <Steps ls={(15 / ((maxSteps.length > 15) ? maxSteps.length : maxSteps.length))}> {maxSteps}</Steps>
        </div>
        <div className="race-container12">
          <h3>Start</h3>
          <h3>Finish</h3>
        </div>
      </div><div className="overview-container07">
        <div className="overview-container08">
          {users && users[2] && <Profil user={users[2]} showState={true} />}
        </div>
        <div className="overview-container10">
          {users && users[3] && <Profil user={users[3]} showState={true} />}
        </div>
      </div>
      </>
  )
}

export default Race
