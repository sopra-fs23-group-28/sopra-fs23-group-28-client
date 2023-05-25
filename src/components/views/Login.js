import React, { useState } from "react"
import { api, handleError } from 'helpers/api'
import User from 'models/User'
import { Navigate, useNavigate } from 'react-router-dom'

import 'styles/views/Login.scss'


const Login = (props) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const doLogin = async () => {
    try {
      const requestBody = JSON.stringify({ username })
      const response = await api.post('/users', requestBody)

      // Get the returned user and update a new object.
      const user = new User(response.data)

      // Store the token into the local storage.
      localStorage.setItem('token', user.token)
      localStorage.setItem('id', user.id)
      localStorage.setItem('user', user)
      localStorage.setItem('deg',0)
        // Login successfully worked --> navigate to the route /lobby in the GameRouter
        navigate("/lobby")
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`)
    }
  }

  const checkUser = () => {
    return (localStorage.token && localStorage.id && localStorage.user);
  }

  if (checkUser()) {
    return <Navigate to={"/lobby"} />
  } else {
    return (
      <div className="login-container">
        <div className="login-main-div">
          <h1 className="login-title">Welcome to Camel Race</h1>
          <p className="login-instructions">
            Choose a unique username
            <br></br>
            <u>It has to consist of at least 4 characters!</u>
          </p>
          <div className="login-input-container">
            <p className="login-input-description">Name</p>
            <input
              type="text"
              name="Name"
              required
              placeholder="Name"
              autoComplete="name"
              value={username}
              onChange={un => setUsername(un.target.value)}
              className="login-input-field input"
            />
          </div>
          <button
            type="submit"
            className="login-login-button button"
            disabled={!username || username.length < 4 || username.length > 10}
            onClick={() => doLogin()} >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
