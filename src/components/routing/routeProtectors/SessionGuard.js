import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const SessionGuard = props => {
    // !!! also has to check for a full lobby !!!
    // && (api.) not full

    if (!localStorage.getItem("pin")) {
      if (viewer) {
        return props.children;
      } else if (true) {
        return props.children;
      }
    }

    // if user entered a faulty PIN that has not been generated as part of a lobby
    // instantiation, redirects to the overview page
    return <Link to="/lobby"/>;
  };
  
  SessionGuard.propTypes = {
    children: PropTypes.node
  }