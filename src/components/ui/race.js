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
  // eslint-disable-next-line no-unused-vars
  const [lobby, setLobby] = useState(null);
  const [arr, setArr] = useState(1);
  const [maxSteps, setMaxSteps] = useState(['0','1 ', '2 ', '3 ', '4 ', '5 ']);
  const space = [[10.6,8.4,6.5,5.6,4.7,3.8,2.8,1.6,1.3,0.6,0],[0,0,0,4.4,3.4,2.2,1.4,0.8,0,0,0]]

  // setup Socket from overview
  const { socket } = props;


  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;



    socket.on("READY", (s) => {
      console.log(s)
      if (s.message === 'GETCATEGORY') {
        props.setGameState('gc')
      }
      if (s.message === 'GETQUESTION') {
        props.setGameState('gc')
      }

    });

    // socket.on("LOSER", (s) => {
    //   console.log('looser: ', s)
    //   if (s.message === localStorage.getItem('id') ) {
        
    //     props.setPunishment(1)
    //     props.setGameState('pp')
    //   } else if (s.message ==='PUNISHMENTSET') {
  
    //     props.setGameState('rc')
    //   } else {
    //     props.setPunishment(2)
    //     props.setGameState('pp')
    //   }
    //   })

    
    // socket.on("FINISH", (s) => {
    //   console.log(s)
    //   if (s.message === 'FINISH') {
    //     props.setGameState('wi')
    //   }

    // });
    
    // socket.on("WHEEL", (s) => {
    //   console.log(s)
    //   localStorage.setItem('deg',s.message)
    //   props.setGameState('df')

    // });

    

    const fetchData = async() => {

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
            setArr(2)
          }
          for (var i = 0; i <= temp.lobby.maxSteps; i=i+a) {
            steps.push(i + ' ');
          }
          setMaxSteps(steps)
          setLobby(data.data)
          console.log(data.data.roundNumber%3, localStorage.getItem('deg') )
          
          const { creatorId } = data.data
          const localId = localStorage.getItem('id')
          console.log(localId, creatorId, data.data)
          // if (data.data.roundNumber % 3 ===0 && parseInt(localStorage.getItem('deg'))===0){
            
          // if (parseInt(creatorId) === parseInt(localId) && props.punishment===0) {
          //   spin()
          // }
          //   console.log('wheel')
          //   // props.setGameState('df')
          // } 
        }
      })
    }
    if (lobby && lobby.roundNumber % 3 !==0) {
      localStorage.setItem('deg', 0)
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
    console.log('ready', room)
    socket.emit("READY", { room });

  }

    // Handle the difficulty to the BackEnd
    const fate = async (d, a) => {
      const token = localStorage.getItem('token')
      const difficultyWheelDegree = a
      const requestBody = JSON.stringify({token, difficultyWheelDegree})
      try {
        await api.put('/lobbies/' + localStorage.getItem('pin')+'/difficulties', requestBody)
      } catch (e) {
        alert(`Something went wrong during the transmission: \n${handleError(error)}`)
      }
    }
  // Difficulty for the API call

  const getDifficulty = (ranD) => {
    if (ranD % 180 > 120) {
      return "EASY"
    } else if (ranD % 180 > 60){
      return "MEDIUM"
    } else {
      return "HARD"
    }
  }

  function spin (){
    // generate random number between 1 - 360 for selection
    let randomDegree = (Math.floor(Math.random() * (360 - 1 + 1)) + 1)
    let sealed = getDifficulty(randomDegree)
    fate(sealed, randomDegree)
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
          <Steps ls={(space[arr-1][maxSteps.length-6])}> {maxSteps}</Steps>
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
