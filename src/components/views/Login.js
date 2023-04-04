import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import 'styles/views/login.scss'


const Login = (props) => {
  const history = useHistory();
  let [username, setUsername] = useState("");


  return (
    <div className="login-container">
      <div className="login-container1">
        <h1 className="login-login-text">Heading</h1>
        <span className="login-text">
          <span>logindescription</span>
          <br></br>
        </span>
        <div className="login-container2">
          <span className="login-text3">Name</span>
          <input
            type="text"
            name="Name"
            required
            placeholder="Name"
            autoComplete="name"
            className="login-input input"
          />
        </div>
        <button type="submit" className="login-button button">
            <span>Login</span>
        </button>
      </div>
    </div>
  )
}

export default Login
