import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";


export const LoginGuard = props => {
  if (!localStorage.getItem("token")) {
    return props.children;
  }

  // if user is already logged in, redirects to the lobby
  return <Navigate to="/lobby" replace />;
};

LoginGuard.propTypes = {
  children: PropTypes.node
}
