import React from 'react';
import 'styles/ui/enter-pin.scss'

const EnterPIN = (props) => {
    return (
      <div className="enter-pin-container">
        <div className="enter-pin-main-div">
          <h1 className="enter-pin-title">Please enter the PIN</h1>
          <input type="text" placeholder="PIN" className="enter-pin-pin input" />
        </div>
      </div>
    )
  }
  
  export default EnterPIN
