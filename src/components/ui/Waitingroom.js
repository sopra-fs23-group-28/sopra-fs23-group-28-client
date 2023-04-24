import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "styles/ui/Waitingroom.scss";


const profil = (user) => {
  // console.log(user)
  return (
    <div className="overview-container02">
      <div className="overview-container03">
        <img
          alt={'profile' + user.id}
          src="/playground_assets/bluecamel-200h.gif"
          className="overview-image" />
      </div>
      <h1 className="overview-text">{(user.username.toUpperCase())}</h1>
    </div>
  )

}

export const Waitingroom = (props) => {
  
  const [state, setState] = useState({startB: false, users: null, lobby: null});
  const navigate = useNavigate()
  const [users, setUsers] = useState(null);
  const [lobby, setLobby] = useState(null);
  let reload = 0
  const { socket } = props;
  

  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    
  socket.on("NEWUSER", (s) => {
    reload +=1
    
  fetchData()
    console.log(s)
  });

  const fetchData = () => {

    api.get('/users/' + localStorage.getItem('pin')).then(getU => {
      if (isMounted) {
        const temp = state
        temp.users = getU.data
        setState(temp)
        setUsers(getU.data)
        console.log(state)
      }
    })

    
    api.get('/lobbies/' + localStorage.getItem('pin')).then(data => {
      if (isMounted) {
        const temp = state
        temp.lobby = data.data
        const {id, creatorId} = temp.lobby
      const localId = localStorage.getItem('id')
      if (parseInt(creatorId) === parseInt(localId)) {
        temp.startB = true
      }
        setState(temp)
        setLobby(data.data)
        console.log(state)
        
      }
    })

  }

  fetchData()
    // Clean-up:    
    return () => {
      isMounted = false;
      reload =false

    }
  }, [state, reload]);

  const exitLobby = () => {
    localStorage.removeItem('pin')
    navigate("/lobby")
  }


  return (
    <>
      <div className="overview-container01">
        <div className="overview-container02">
          {users && users[0] && profil(users[0])}
        </div>
        <div className="overview-container04">

          {users && users[1] && profil(users[1])}
        </div>
      </div><div className="overview-container06">
        <div className="overview-btn-group">
          {state.startB && <button className="overview-start-game button" disabled={((state.users.length ===4)?false:true)}>Start Game</button> }
          <button className="overview-exit-game button" onClick={() => exitLobby()}>Exit Game</button>
        </div>
      </div><div className="overview-container07">
        <div className="overview-container08">
          
        {users && users[2] && profil(users[2])}
        </div>
        <div className="overview-container10">
          {users && users[3] && profil(users[3])}
        </div>
      </div>
    </>
  );
};
