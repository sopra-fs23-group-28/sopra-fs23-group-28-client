import React, { useState } from 'react';
import 'styles/ui/enter-pin.scss'

const EnterPIN = ({joinGame}) => {
  const [pin, setPin] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === 'Enter'){
      joinGame(pin)
    }
  }

  return (
    <div className="enter-pin-main-div">
      <h1 className="enter-pin-title">Please enter the PIN</h1>
      <input type="text"
        placeholder="PIN"
        className="enter-pin-pin input"
        value={pin}
        onChange={un => setPin(un.target.value)}
        onKeyDown={handleKeyDown} />
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
