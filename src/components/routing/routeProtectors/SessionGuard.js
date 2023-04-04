import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export const SessionGuard = props => {
    // !!! also has to check for a full lobby !!!
    // && (api.) not full
    if (!localStorage.getItem("pin")) {
      return props.children;
    }

    // if user entered a faulty PIN that has not been generated as part of a lobby
    // instantiation, redirects to the overview page
    return <Redirect to="/lobby"/>;
  };
  
  SessionGuard.propTypes = {
    children: PropTypes.node
  }