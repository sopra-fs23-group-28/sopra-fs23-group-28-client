import { api } from 'helpers/api';
import { useState } from 'react'
import 'styles/views/punishment-slider-player-select.scss'

const PunishmentSliderPlayerSelect = (props) => {
  const MAX = 5;
  const [punishmentSteps, setPunishmentSteps] = useState(1);

  const pushPunishment = async ( token) => {
    console.log('test: ', punishmentSteps, token);
    const requestBody = JSON.stringify({ punishmentSteps, token });
    await api.put('/lobbies/' + localStorage.getItem('pin') + '/punishments', requestBody);
  }

  return (
    <>
    {props.punishment ===1 &&
        <div className="settings-container">
        <div className="settings-main-div" >
          <h1 className="settings-titel">Punishment</h1>
          <div className="settings-content-div">
            <p className="settings-slider-description">
              Choose the punishment Steps for all Users<br/><br/>
              Steps: {punishmentSteps}
            </p>
            <input type="range"
              min="1"
              max={MAX}
              onChange={(e) => setPunishmentSteps(parseInt(e.target.value))}
              value={punishmentSteps} />
            <button className="settings-submit button" onClick={() => pushPunishment(localStorage.getItem('token'))}>Save</button>
          </div>
        </div>
      </div>}
      {props.punishment ===2 &&
        <div className="settings-container">
        <div className="settings-main-div" >
          <h1 className="settings-titel">Punishment</h1>
          <div className="settings-content-div">
            <p className="settings-slider-description">
              Wait until the Loser has choose the punishment.<br/>
            </p>
          </div>
        </div>
      </div>}
    </>
  )
}

export default PunishmentSliderPlayerSelect
