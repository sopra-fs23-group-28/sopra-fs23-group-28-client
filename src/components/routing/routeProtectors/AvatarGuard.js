import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";


export const AvatarGuard = props => {
  // -> adjust to API conform call for avatar  
  if (!localStorage.getItem("avatar")) {
    return props.children;
  }
  // if user already has an avatar, redirects to the overview
  return <Redirect to="/choose-avatar"/>;
};

AvatarGuard.propTypes = {
  children: PropTypes.node
}