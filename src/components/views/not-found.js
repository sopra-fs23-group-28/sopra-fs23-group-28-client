import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'styles/views/not-found.scss'

const NotFound = (props) => {
  const navigate = useNavigate()

  return (
    <div className="not-found-container">
      <div className="not-found-main-div">
        <h1 className="not-found-error-message">
          <span>Error 404</span>
          <span> - No camels found</span>
          <br></br>
          <br></br>
          <span>Oh noo, you are lost in the desert!</span>
        </h1>
        <button onClick={() => {navigate("/")}} className="not-found-home button">
          Get back to the Home Page
        </button>
      </div>
    </div>
  )
}

export default NotFound
