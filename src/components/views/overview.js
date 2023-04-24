import { Waitingroom } from 'components/ui/Waitingroom';
import { useRef, useState } from 'react'
import { api, handleError } from 'helpers/api';

import { redirect, useNavigate } from 'react-router-dom';

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



// socket.current.emit("send_message", { "room": "123", "type": "CLIENT", "message": "sup" })//{ room: "123", type:'CLIENT', msg:'sup'})



const Overview = (props) => {
  // controlls the gamestate and which component is rendered
  const [gameState, setGameState] = useState('wr');
  // use react-router-dom's hook to access the history
  const navigate = useNavigate();
  const socket = useRef();
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')
//init socket.io
  socket.current = io('ws://localhost:9092?room=' + pin + '&token=' + token, {

  });
  socket.current.on("connect_error", () => {
    // revert to classic upgrade
    console.log("err")
  });

  function checkPin() {
    let pass = true
    try {

    } catch (error) {
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
    if (!pass) {
      alert("There is currently no lobby associated with this PIN");
      throw redirect("/lobby", { replace: true });
    }
    return pass
  }

  function checkAvatar() {
    let pass = true
    try {
      const avatar = localStorage.getItem('avatar')
      pass= avatar
    } catch (error) {
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
    if (!pass) {
      // console.log('redirect')
      // redirect(`/game/${pin}/choosing`);
    }
    return pass
  }
  const getLobby  = async () => {
    try {
      await api.get('/lobbies/{lobbyId}')
    } catch (error) {
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
  }


  return (
    <>
      {checkAvatar() ? (
        //TODO: can it actually render these with the approporiate styles?
        // currently it uses overview.scss instead of waitingroom for default!!
        <div className='overview-container'>
          {gameState === 'wr' && <Waitingroom socket={socket.current} getLobby={getLobby}/>}
          {gameState === 'rc' && <Race socket={socket.current}/>}
          {gameState === 'ct' && <Category socket={socket.current}/>}
          {gameState === 're' && <RandomEvent socket={socket.current}/>}
          {gameState === 'q4' && <Question4Options socket={socket.current}/>}
          {gameState === 'qt' && <QuestionTrueFalse />}
          {gameState === 'qv' && <QuestionVoting />}
          {gameState === 'pp' && <PunishmentSliderPlayerSelect />}
        </div>
      ) : (<ChooseAvatar />)}
    </>
  )
}

export default Overview
