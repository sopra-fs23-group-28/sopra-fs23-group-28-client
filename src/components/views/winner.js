import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import 'styles/views/winner.scss'

import ScoreboardPlayerStats from 'components/ui/scoreboard-player-stats'
import ScoreboardPodium from 'components/ui/scoreboard-podium'
import { api } from 'helpers/api'

function compare( a, b ) {
  if ( a.stepState < b.stepState ){
    return 1
  }
  if ( a.stepState > b.stepState ){
    return -1
  }
  return 0
}


const Winner = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [lobby, setLobby] = useState(null)

  useEffect( () => {
    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    const fetchData = async () => {
      await api.get('/users/' + localStorage.getItem('pin')).then(getU => {
        if (isMounted) {
          setUsers(getU.data)
        }
      })

      await api.get('/lobbies/' + localStorage.getItem('pin')).then(data => {
        if (isMounted) {
          setLobby(data.data)
        }
      })
    }

    fetchData()
    // Clean-up:    
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="winner-container">
      <div className="winner-header-div">
        <button className="winner-goHome button" onClick={() => {navigate("/lobby")}}>
          Back to Lobby</button>
      </div>
      <div className="winner-main-div">
        <h1 className="winner-titel">Scoreboard</h1>
        <div className="winner-hero-div">
          <div className="winner-stats-div">
          {users && users.sort(compare).map((e,i) => {
            return <ScoreboardPlayerStats key={i} rootClassName="rootClassName" user={e} rank={"Rank: "+(i+1)} ppr={((lobby? lobby.roundNumber:0) !== 0 ? (e.stepState / lobby.roundNumber).toFixed(2) : 0)}></ScoreboardPlayerStats>
          })}
          </div>
          <div className="winner-podium-div">
            {users && <ScoreboardPodium users={users.sort(compare) } />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Winner
