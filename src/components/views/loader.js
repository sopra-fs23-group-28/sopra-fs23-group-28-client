import Loader from 'components/ui/loader'
import React from 'react'
import 'styles/views/loader.scss'

const Register = (props) => {
  return (
    <div className="register-container">
      <div className="register-container1">
        <Loader/>
      </div>
    </div>
  )
}

export default Register
