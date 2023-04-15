import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import BigScreenView from 'components/views/big-screen-view'
import Rules from 'components/views/rules'
import Lobby from 'components/views/lobby'
import Loader from 'components/views/loader'
import Login from 'components/views/Login'
import NotFound from 'components/views/not-found'
import GameRouter from "./GameRouter"
import {LobbyGuard} from "components/routing/routeProtectors/LobbyGuard";
import {LoginGuard} from "components/routing/routeProtectors/LoginGuard";
import {SessionGuard} from "components/routing/routeProtectors/SessionGuard";
import Overview from "components/views/overview"
import ChooseAvatar from "components/views/choose-avatar";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lobby">
          {/* <LobbyGuard> */}
            <Lobby/>
          {/* </LobbyGuard> */}
        </Route>
        <Route path="/login">
          {/* <LoginGuard> */}
            <Login/>
          {/* </LoginGuard> */}
        </Route>
        <Route path="/">
          <Navigate to="/login" />
        </Route>
        <Route path="/lobby/:sessionPin">
          {/* <SessionGuard> */}
            <ChooseAvatar/>
            <Route path="/game" element={<Overview/>} />
              <Route path="/exit">
                <Navigate to="../../../lobby" />
              </Route>
              <Route path="/*" element={<GameRouter/>} />
          {/* </SessionGuard> */}
        </Route>

        <Route path="/big-screen-view/:sessionPin">
          <SessionGuard viewer={true} >
            <BigScreenView/>
          </SessionGuard>
        </Route>

        <Route path="/rules" element={<Rules/>} />

        {/* have this in every router? */}
        <Route path="/loader" element={<Loader/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
