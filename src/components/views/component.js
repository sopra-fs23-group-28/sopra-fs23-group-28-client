/* eslint-disable react-hooks/exhaustive-deps */
import { Waitingroom } from 'components/ui/Waitingroom';
import { useEffect, useState } from 'react'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import PunishmentSliderPlayerSelect from 'components/ui/punishment-slider-player-select';
import Category from 'components/ui/category';
import Winner from './winner';
import { Navigate } from 'react-router-dom';
import Difficulty from 'components/ui/difficulty';

import 'styles/views/overview.scss'

const Component = (props) => {

  // controlls the gamestate and which component is rendered
  const [gameState, setGameState] = useState('wr')
  const [first, setFirst] = useState(false)
  const [punishment, setPunishment] = useState(0)
  const pin = localStorage.getItem('pin')
  const { socket } = props

  useEffect(() => {
    // is Mounted to check if unmounted Objects exists.
    socket.on("GAMESTART", (s) => {
      // if Gamestart and lobby ready --> Gamestart else NOSTART 
      // change gamestate to race
      if (s.message === 'GAMESTART') {
        setGameState('rc')
      }
    })
  
    socket.on("LOSER", (s) => {
      if (s.message ==='PUNISHMENTSET') {
        setPunishment(0)
        setGameState('rc')
      }
    })
  
    socket.on("FINISH", (s) => {
      if (s.message === 'FINISH') {
        setGameState('wi')
      }
    })

    socket.on("WHEEL", (s) => {
      localStorage.setItem('deg',s.message)
      setGameState('df')
    })
    
    socket.on("READY", (s) => {
      if (s.message === 'GETCATEGORY') {
        setPunishment(3)
        setGameState('gc')
      }
      if (s.message === 'GETQUESTION') {
        setPunishment(3)
        setGameState('gc')
      }
    })

  }, [pin]);


  const checkUser = () => {
    return (localStorage.token && localStorage.id && localStorage.user && localStorage.avatar)
  }

  if (!checkUser()) {
    return <Navigate to={"/"} />
  } else {
    return (
      <>
        <div className='overview-container'>
          {gameState === 'wr' && <Waitingroom socket={socket} setGameState={setGameState} />}
          {gameState === 'rc' && <Race socket={socket} setGameState={setGameState} punishment={punishment}/>}
          {gameState === 'gc' && <Category socket={socket} setGameState={setGameState} first={first} setFirst={setFirst} />}
          {gameState === 're' && <RandomEvent socket={socket} setGameState={setGameState} />}
          {gameState === 'q4' && <Question4Options socket={socket} setGameState={setGameState} setPunishment={setPunishment} />}
          {gameState === 'df' && <Difficulty  socket={socket} setGameState={setGameState} />}
          {gameState === 'pp' && <PunishmentSliderPlayerSelect socket={socket} setGameState={setGameState} punishment={punishment} />}
          {gameState === 'wi' && <Winner />}
        </div>
      </>
    )
  }
  
}

export default Component