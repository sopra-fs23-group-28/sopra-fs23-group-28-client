import 'styles/views/settings.scss'

const Settings = (props) => {
  const MAX = 25;
  return (
    <>
      <div className="settings-container">
        <div className="settings-main-div" >
          <h1 className="settings-titel">Settings</h1>
          <div className="settings-content-div">
            <p className="settings-slider-description">
              Choose the Numbers of Steps to be played<br/><br/>
              Steps: {props.value}
            </p>
            <input type="range"
              min="1"
              max={MAX}
              onChange={(e) => props.setValue(e.target.value)}
              value={props.value} />
            <button className="settings-submit button" onClick={() => props.setSettings(false)}>Save</button>
          </div>
        </div>
      </div>
      {/* <div className="rules-container" onClick={() => props.setRules(false)}> */}
      {/* </div> */}
    </>
  )
}

export default Settings
