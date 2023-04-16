import { Waitingroom } from 'components/ui/Waitingroom';
import { useRef, useState } from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

import 'styles/views/overview.scss'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import QuestionFillBlank from 'components/ui/question-fill-blank';
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
  const history = useNavigate();
  const socket = useRef();
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')

  // 123&token='+'cedis-token
  // socket.current = io('ws://localhost:9092?room=' + pin, {
  //   query: { token }
  // });
  
  


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
      {gameState === 'qf' && <QuestionFillBlank />}
      {gameState === 'qt' && <QuestionTrueFalse />}
      {gameState === 'qv' && <QuestionVoting />}
      {gameState === 'pp' && <PunishmentSliderPlayerSelect />}

    </div>
  )
}

export default Overview
