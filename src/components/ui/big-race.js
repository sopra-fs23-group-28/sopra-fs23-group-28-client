/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import 'styles/views/race.scss'
import Profil from './helpers/profil';
import Court from './court';
import ScoreboardPlayerStats from './scoreboard-player-stats';
import ScoreboardPodium from './scoreboard-podium';
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
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


const BigScreenRace = (props) => {
  const navigate = useNavigate();
  // Create State Objects
  const [state, setState] = useState({ startB: false, users: null, lobby: null });
  const [users, setUsers] = useState(null);
  const [gameState, setGameState] = useState('rc');
  const [arr, setArr] = useState(1);
  const [maxSteps, setMaxSteps] = useState(['0', '1 ', '2 ', '3 ', '4 ', '5 ']);
  const [punishmentSteps, setPunishmentSteps] = useState(0);
  const space = [[10.6, 8.4, 6.5, 5.6, 4.7, 3.8, 2.8, 1.6, 1.3, 0.6, 0], [0, 0, 0, 4.4, 3.4, 2.2, 1.4, 0.8, 0, 0, 0]]
  const pin = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    const fetchData = async () => {
      api.get('/users/' + pin).then(getU => {
        if (isMounted) {
          const temp = state
          temp.users = getU.data
          setState(temp)
          setUsers(getU.data)
        }
        api.get('/lobbies/' + pin).then(data => {
          if (isMounted) {
            const temp = state
            temp.lobby = data.data
            setState(temp)
            setMaxSteps(renderSteps(temp.lobby.maxSteps))
            setPunishmentSteps(temp.lobby.punishmentSteps)
            if (users&& users.map((e) => e.stepState > temp.lobby.maxSteps)){
              setGameState('fi')
            }
          }
        })
      })
      }

      const interval = setInterval(() => fetchData(), 3000);
      return () => clearInterval(interval);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);


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
  
  function compare( a, b ) {
    if ( a.stepState < b.stepState ){
      return 1
    }
    if ( a.stepState > b.stepState ){
      return -1
    }
    return 0
  }

  return (
    <>
      { gameState ==='rc' && 
      <div className='overview-container'>
        {
          state.lobby ?
          <>
            <div className="overview-container01">
              <div className="overview-container02">
                {users && users[0] && <Profil user={users[0]} showState={true} />}
              </div>
              <div className="overview-container04">
                {users && users[1] && <Profil user={users[1]} showState={true} />}
              </div>
            </div>
            <div className="race-container06">
              {users && <Court users={users} maxSteps={maxSteps.length} punishmentSteps={punishmentSteps} />}
              <div className="race-container12">
                <Steps ls={(space[arr - 1][maxSteps.length - 6])}> {maxSteps}</Steps>
              </div>
              <div className="race-container12">
                <h3>Start</h3>
                <h3>Finish</h3>
              </div>
            </div>
            <div className="overview-container01">
              <div className="overview-container02">
                {users && users[2] && <Profil user={users[2]} showState={true} />}
              </div>
              <div className="overview-container04">
                {users && users[3] && <Profil user={users[3]} showState={true} />}
              </div>
            </div>
          </> : <Loader/>
        }
      </div>
      }
      {gameState==='fi' && 
        <div className="winner-container">
          <div className="winner-header-div">
            <button className="winner-goHome button" onClick={() => {navigate("/lobby")}}>
              Back to Lobby</button>
          </div>
          <div className="winner-main-div">
            <h1 className="winner-titel">Scoreboard</h1>
            <div className="winner-hero-div">
              <div className="winner-stats-div">
                {users && users.sort(compare).map((e,i) => {
                  return <ScoreboardPlayerStats key={i} rootClassName="rootClassName" user={e} rank={"Rank: "+(i+1)} ppr={((state.lobby? state.lobby.roundNumber:0) !== 0 ? e.stepState/state.lobby.roundNumber : 0)}></ScoreboardPlayerStats>
                  })
                }
              </div>
              <div className="winner-podium-div">
                {users && <ScoreboardPodium users={users.sort(compare) } />}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default BigScreenRace
