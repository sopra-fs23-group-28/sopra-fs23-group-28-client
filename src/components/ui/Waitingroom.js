import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "styles/ui/Waitingroom.scss";
import Rules from './rules';
import Settings from './settings';
import Profil from './helpers/profil';


export const Waitingroom = (props) => {

  const [state, setState] = useState({ startB: false, users: null, lobby: null });
  const navigate = useNavigate()
  const [users, setUsers] = useState(null);
  const [lobby, setLobby] = useState(null);
  const [master, setMaster] = useState(false);
  const [rules, setRules] = useState(false);
  const [settings, setSettings] = useState(false);
  const [value, setValue] = useState(15);
  let reload = 0
  const { socket } = props;


  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;


    socket.on("NEWUSER", (s) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      reload += 1

      fetchData()
      console.log(s)
    });


    socket.on("GAMEMASTER", (s) => {
      console.log(s)
    });

    socket.on("GAMESTART", (s) => {
      // if Gamestart and lobby ready --> Gamestart else NOSTART 
      // change gamestate to race
      console.log(s.message)
      if (s.message === 'GAMESTART') {
        console.log('logstart: ', s)
        props.setGameState('rc')
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
          const { creatorId } = temp.lobby
          const localId = localStorage.getItem('id')
          console.log(localId, creatorId)
          if (parseInt(creatorId) === parseInt(localId)) {
            temp.startB = true
            setMaster(true)
          }
          setState(temp)
          setLobby(data.data)
          console.log(lobby)

        }
      })
    }

    fetchData()
    // Clean-up:    
    return () => {
      isMounted = false;
      reload = false

    }
  }, [state, reload]);

  const exitLobby = () => {
    localStorage.removeItem('pin')
    //TODO API to delete lobby entry
    navigate("/lobby")
  }

  const startGame = async (maxSteps, token) => {
    console.log(JSON.stringify({ maxSteps, token }));
    const requestBody = JSON.stringify({ maxSteps, token });
    await api.put('/lobbies/' + state.lobby.id, requestBody);
  }

  return (
    <>
      <div className="overview-container01">
        <div className="overview-container02">
          {users && users[0] && <Profil user={users[0]} />}
        </div>
        <div className="overview-container04">
          {users && users[1] && <Profil user={users[1]} />}
        </div>
      </div>
      <div className="overview-container06">
        <div className="overview-btn-group">
          {master && <button className="overview-start-game button" disabled={((state && state.users && state.users.length === 4) ? false : true)} onClick={() => startGame(value, localStorage.getItem('token'))} >Start Game</button>}
          {master && <button className="overview-start-game button" onClick={() => setSettings(!settings)}>Settings</button>}
          <button className="overview-exit-game button" onClick={() => exitLobby()}>Exit Game</button>
          <button className="overview-exit-game button" onClick={() => setRules(!rules)}>Rules</button>
        </div>
      </div>
      <div className="overview-container07">
        <div className="overview-container08">
          {users && users[2] && <Profil user={users[2]} />}
        </div>
        <div className="overview-container10">
          {users && users[3] && <Profil user={users[3]} />}
        </div>
      </div>
      {rules && <Rules setRules={setRules} />}
      {settings && <Settings value={value} setValue={setValue} setSettings={setSettings} />}
    </>
  );
};
