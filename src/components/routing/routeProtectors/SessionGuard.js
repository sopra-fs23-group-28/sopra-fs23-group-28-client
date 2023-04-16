import {Navigate, useParams} from "react-router-dom";

export function SessionGuard() {
    const {id} = useParams;
    // !!! also has to check for a full lobby !!!
    // && (api.) not full

    // if (localStorage.getItem("pin")) {
    //   return props.children;
    // }

    // if user entered a faulty PIN that has not been generated as part of a lobby
    // instantiation, redirects to the overview page
    return <Navigate to="/lobby" replace />;
}
