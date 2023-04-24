import { Waitingroom } from 'components/ui/Waitingroom';
import { useEffect, useRef, useState } from 'react'
import { api, handleError } from 'helpers/api';

import 'styles/views/overview.scss'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import QuestionTrueFalse from 'components/ui/question-true-false';
import QuestionVoting from 'components/ui/question-voting';
import PunishmentSliderPlayerSelect from 'components/ui/punishment-slider-player-select';
import * as io from 'socket.io-client';
import ChooseAvatar from 'components/ui/choose-avatar';
import Category from 'components/ui/category';
import { getSocketAdr } from 'helpers/getDomain';



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
  socket.current = io(getSocketAdr() + '?room=' + pin + '&token=' + token, {
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
      if (localStorage.getItem('avatar')) {
        setGameState('wr')
      }
    }

    // Clean-up:    
    return () => {
      isMounted = false;

    }

  }, [pin, rerender]);
  // function checkPin() {
  //   let pass = true
  //   try {

  //   } catch (error) {
  //     alert(`Something went wrong during the check: \n${handleError(error)}`);
  //   }
  //   if (!pass) {
  //     alert("There is currently no lobby associated with this PIN");
  //     throw redirect("/lobby", { replace: true });
  //   }
  //   return pass
  // }




  return (
    <>
      <div className='overview-container'>
        {gameState === 'wr' && <Waitingroom socket={socket.current} setGameState={setGameState} />}
        {gameState === 'rc' && <Race socket={socket.current} />}
        {gameState === 'ct' && <Category socket={socket.current} />}
        {gameState === 're' && <RandomEvent socket={socket.current} />}
        {gameState === 'q4' && <Question4Options socket={socket.current} />}
        {gameState === 'qt' && <QuestionTrueFalse />}
        {gameState === 'qv' && <QuestionVoting />}
        {gameState === 'pp' && <PunishmentSliderPlayerSelect />}
      </div>
    </>
  )
}

export default Overview
