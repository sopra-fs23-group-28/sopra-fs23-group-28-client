import { Waitingroom } from 'components/ui/Waitingroom';
import { useEffect, useRef, useState } from 'react'

import 'styles/views/overview.scss'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import QuestionTrueFalse from 'components/ui/question-true-false';
import QuestionVoting from 'components/ui/question-voting';
import PunishmentSliderPlayerSelect from 'components/ui/punishment-slider-player-select';
import * as io from 'socket.io-client';
import Category from 'components/ui/category';
import { getSocketAdr } from 'helpers/getDomain';
import Winner from './winner';
import { Navigate } from 'react-router-dom';


// socket.current.emit("se§nd_message", { "room": "123", "type": "CLIENT", "message": "sup" })//{ room: "123", type:'CLIENT', msg:'sup'})


const Overview = (props) => {
  // controlls the gamestate and which component is rendered
  const [gameState, setGameState] = useState('wr');
  const [rerender, setRerender] = useState(false);
  // use react-router-dom's hook to access the history
  const socket = useRef();
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')
  //init socket.io
  socket.current = io(getSocketAdr(localStorage.getItem('ip')) + '?room=' + pin + '&token=' + token, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
  });
  socket.current.on("connect_error", () => {
    // revert to classic upgrade
    console.log("err")
  });

  useEffect(() => {
    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;
    // reset rerender
    if (rerender) {
      setRerender(false)
    }
    if (isMounted) {
      //Set GameState by reload the site
    }

    // Clean-up:    
    return () => {
      isMounted = false;
    }
  }, [pin, rerender]);


  console.log(gameState)

  const checkUser = () => {
    if (localStorage.token && localStorage.id && localStorage.user && localStorage.avatar){
      return true
    }
    return false
  }

  if (!checkUser()) {
    return <Navigate to={"/"} />
  } else {
    return (
      <>
        <div className='overview-container'>
          {gameState === 'wr' && <Waitingroom socket={socket.current} setGameState={setGameState} />}
          {gameState === 'rc' && <Race socket={socket.current} setGameState={setGameState} />}
          {gameState === 'gc' && <Category socket={socket.current} setGameState={setGameState} />}
          {gameState === 're' && <RandomEvent socket={socket.current} setGameState={setGameState} />}
          {gameState === 'q4' && <Question4Options socket={socket.current} setGameState={setGameState} />}
          {gameState === 'qt' && <QuestionTrueFalse />}
          {gameState === 'qv' && <QuestionVoting />}
          {gameState === 'pp' && <PunishmentSliderPlayerSelect />}
          {gameState === 'wi' && <Winner />}
        </div>
      </>
    )
  }
}

export default Overview
