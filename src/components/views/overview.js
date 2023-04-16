import { Waitingroom } from 'components/ui/Waitingroom';
import { useRef, useState } from 'react'
import { api, handleError } from 'helpers/api';

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

import 'styles/views/overview.scss'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import QuestionTrueFalse from 'components/ui/question-true-false';
import QuestionVoting from 'components/ui/question-voting';
import PunishmentSliderPlayerSelect from 'components/ui/punishment-slider-player-select';


// import * as io from 'socket.io-client';
// socket.current.on("connect_error", () => {
//   // revert to classic upgrade
//   console.log("err")
//   socket.current.io.opts.transports = ["polling", "websocket"];
// });

// socket.current.emit("send_message", { "room": "123", "type": "CLIENT", "message": "sup" })//{ room: "123", type:'CLIENT', msg:'sup'})

// socket.current.on("get_message", (s) => {
//   console.log('connect')
// });


const Overview = (props) => {
  // controlls the gamestate and which component is rendered
  const [gameState, setGameState] = useState('wr');
  // use react-router-dom's hook to access the history
  const navigate = useNavigate();
  const socket = useRef();
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')

  // 123&token='+'cedis-token
  // socket.current = io('ws://localhost:9092?room=' + pin, {
  //   query: { token }
  // });
  
  function checkPin(){
    try{
      
    } catch (error){
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
  }

  const checkAvatar = async() => {
    try{
      
    } catch (error){
      alert(`Something went wrong during the check: \n${handleError(error)}`);
    }
  }


  if (checkPin){
    if (checkAvatar){
      return (
        <div className="overview-container">
          <Helmet>
            <title>Overview - SoPra Mockups</title>
            <meta property="og:title" content="Overview - SoPra Mockups" />
          </Helmet>
          {gameState === 'wr' && <Waitingroom />}
          {gameState === 'rc' && <Race />}
          {gameState === 're' && <RandomEvent />}
          {gameState === 'q4' && <Question4Options />}
          {gameState === 'qt' && <QuestionTrueFalse />}
          {gameState === 'qv' && <QuestionVoting />}
          {gameState === 'pp' && <PunishmentSliderPlayerSelect />}

        </div>
      )
    } else{navigate(`/game/${pin}/choosing`);}
  } else{
    alert("There is currently no lobby associated with this PIN");
    navigate("/lobby", {replace: true});
  }
}

export default Overview
