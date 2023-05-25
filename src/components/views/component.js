import { Waitingroom } from 'components/ui/Waitingroom';
import { useEffect, useRef, useState } from 'react'
import 'styles/views/overview.scss'
import Race from 'components/ui/race';
import RandomEvent from 'components/ui/random-event';
import Question4Options from 'components/ui/question4-options';
import PunishmentSliderPlayerSelect from 'components/ui/punishment-slider-player-select';
import Category from 'components/ui/category';
import { getSocketAdr } from 'helpers/getDomain';
import Winner from './winner';
import { Navigate } from 'react-router-dom';
import Difficulty from 'components/ui/difficulty';

const Component = (props) => {

  // controlls the gamestate and which component is rendered
  // const [gameState, setGameState] = useState('pp');
  const [gameState, setGameState] = useState('wr');
  const [rerender, setRerender] = useState(false);
  const [first, setFirst] = useState(false);
  const [punishment, setPunishment] = useState(0);
  // use react-router-dom's hook to access the history
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')
  const { socket } = props;
  
  socket.on("GAMESTART", (s) => {
    // if Gamestart and lobby ready --> Gamestart else NOSTART 
    // change gamestate to race
    console.log(s.message)
    if (s.message === 'GAMESTART') {
      // console.log('logstart: ', s)
      setGameState('rc')
    }
  });

    socket.on("LOSER", (s) => {
    console.log('TEST: ', s)
    if (s.message ==='PUNISHMENTSET') {
      // console.log('punish test')
      setPunishment(0)
      setGameState('rc')

    }
   
    })

    socket.on("FINISH", (s) => {
      // console.log(s)
      if (s.message === 'FINISH') {
        setGameState('wi')
      }

    });
    
    // socket.on("WHEEL", (s) => {
    //   console.log('wheel: ', s)
    //   localStorage.setItem('deg',s.message)
    //   setGameState('df')

    // });
    
    
  socket.on("READY", (s) => {
    
    console.log("ready")
    if (s.message === 'GETCATEGORY') {
      
      setPunishment(3)
      setGameState('gc')
    }
    if (s.message === 'GETQUESTION') {
      
      setPunishment(3)
      setGameState('gc')
    }

  });
    

  useEffect(() => {
    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;
    // reset rerender
    if (rerender) {
      setRerender(false)
    }

    // Clean-up:    
    return () => {
      isMounted = false;
    }
  }, [pin, rerender]);

  // console.log(gameState)

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
          {gameState === 'wr' && <Waitingroom socket={socket} setGameState={setGameState} />}
          {gameState === 'rc' && <Race socket={socket} setGameState={setGameState} punishment={punishment}/>}
          {gameState === 'gc' && <Category socket={socket} setGameState={setGameState} first={first} setFirst={setFirst} />}
          {gameState === 're' && <RandomEvent socket={socket} setGameState={setGameState} />}
          {gameState === 'q4' && <Question4Options socket={socket} setGameState={setGameState} setPunishment={setPunishment} />}
          {/* {gameState === 'df' && <Difficulty  socket={socket.current} setGameState={setGameState} />} */}
          {gameState === 'pp' && <PunishmentSliderPlayerSelect socket={socket} setGameState={setGameState} punishment={punishment} />}
          {gameState === 'wi' && <Winner />}
        </div>
      </>
    )
  }

}

export default Component