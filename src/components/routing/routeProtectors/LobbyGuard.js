import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// token === username?

export const LobbyGuard = props => {
  if (localStorage.getItem("token")) {
    return props.children;
  }
  
  alert("This username is already taken!");
  return <Navigate to="/" replace />;
};

LobbyGuard.propTypes = {
  children: PropTypes.node
};