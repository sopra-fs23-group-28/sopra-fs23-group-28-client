import {useState} from 'react'
import {api, handleError} from 'helpers/api';
import User from 'models/User';
import {useHistory} from 'react-router-dom';

import 'styles/views/login.scss'


const Login = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const doLogin = async () => {
    try {
      const requestBody = JSON.stringify({username});
      const response = await api.post('/users', requestBody);

      // Get the returned user and update a new object.
      const user = new User(response.data);

      console.log("user: ",user);
      // Store the token into the local storage.
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', user);
      localStorage.setItem('avatar', user.camelColor);

      // if CamelColor is Null go to setAvatar
      console.log(user.camelColor)
      if (user.camelColor == null) {
        history.push('/lobby');
      } else {

      // Login successfully worked --> navigate to the route /lobby in the GameRouter
      history.push(`/lobby`);
      }
    } catch (error) {
      alert(`Something went wrong during the login: \n${handleError(error)}`);
    }
  };



  return (
    <div className="login-container">
      <div className="login-container1">
        <h1 className="login-login-text">Login</h1>
        <h2 className="login-login-text">Welcome to the camel race game</h2>
        <span className="login-text">
          <span>enter your username <br/> your username consists of at least 4 characters</span>
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
            value= {username}
            onChange={un => setUsername(un.target.value)}
            className="login-input input"
          />
        </div>
        <button 
          type="submit" 
          className="login-button button"
          
          disabled={!username || username.length<3}
          onClick={() => doLogin()}
        >
            <span>Login</span>
        </button>
      </div>
    </div>
  )
}

export default Login
