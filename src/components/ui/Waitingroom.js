import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "styles/ui/Waitingroom.scss";


const profil = (user) => {
  return(
    <div className="overview-container02">
    <div className="overview-container03">
      <img
        alt={'profile'+user.id}
        src="/playground_assets/bluecamel-200h.gif"
        className="overview-image" />
    </div>
    <h1 className="overview-text">{user.userName}</h1>
  </div>
  )

}

export const Waitingroom = props => {
  const navigate = useNavigate()
  const [users, setUsers] = useState(null);
  const {socket} = props;
  socket.on("NEWUSER", (s) => {
    console.log('connect ',s)
  });

  useEffect(() => {
    async function getData() {
      const getU = await api.get('/users/'+props.pin)
      setUsers(getU)
    }

      getData()
  }, [props.pin, users]);

  return (
      <>
      <div className="overview-container01">
      <div className="overview-container02">
        {users && users[0] && profil(users[0])}
      </div>
      <div className="overview-container04">
        <div className="overview-container05">
          <img
            alt="image2"
            src="/playground_assets/bluecamel-200h.gif"
            className="overview-image1" />
        </div>
        <h1 className="overview-text1">Player 2</h1>
      </div>
      </div><div className="overview-container06">
        <div className="overview-btn-group">
          <button className="overview-start-game button">Start Game</button>
          <button className="overview-exit-game button" onClick={() => {navigate("/lobby")}}>Exit Game</button>
        </div>
      </div><div className="overview-container07">
        <div className="overview-container08">
          <div className="overview-container09">
            <img
              alt="image3"
              src="/playground_assets/bluecamel-200h.gif"
              className="overview-image2" />
          </div>
          <h1 className="overview-text3">Player 3</h1>
        </div>
        <div className="overview-container10">
          <div className="overview-container11">
            <img
              alt="image4"
              src="/playground_assets/bluecamel-200h.gif"
              className="overview-image3" />
          </div>
          <h1 className="overview-text4">Player 4</h1>
        </div>
      </div>
      </>
  );
};
