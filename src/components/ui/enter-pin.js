import React from 'react';
import 'styles/ui/enter-pin.scss'

const EnterPIN = ({joinGame}) => {
  
  const [pin, setPin] = React.useState("");
    return (
      <div className="enter-pin-main-div">
        <h1 className="enter-pin-title">Please enter the PIN</h1>
        <input type="text" 
          placeholder="PIN" 
          className="enter-pin-pin input" 
          value={pin}
          onChange={un => setPin(un.target.value)} />
        <button
        type="submit"
        className="login-login-button button"
        onClick={() => joinGame(pin)} >
        Join
        </button>
      </div>
    )
  }
  
  export default EnterPIN
