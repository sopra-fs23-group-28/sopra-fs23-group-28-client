import 'styles/views/rules.scss'

const Settings = (props) => {
  const MAX = 25;
  return (
    <><div className="rules-container">
      <div className="rules-main-div" >
        <h1 className="rules-titel">Settings</h1>
        <ol className="rules-rules-text list">
          <li className="list-item">
            Choos the Numbers of Steps. Steps: {props.value}
          </li>
          <input type="range"
            min="0"
            max={MAX}
            onChange={(e) => props.setValue(e.target.value)}
            value={props.value} />
        </ol>

        <div className="overview-btn-group">
          <button className="overview-exit-game button" onClick={() => props.setSettings(false)}>Save</button>
        </div>
      </div>
    </div>
      {/* <div className="rules-container" onClick={() => props.setRules(false)}> */}

      {/* </div> */}
    </>
  )
}

export default Settings
