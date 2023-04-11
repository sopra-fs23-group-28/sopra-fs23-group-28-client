import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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
      <Switch>
        <Route exact path="/lobby">
          {/* <LobbyGuard> */}
            <Lobby/>
          {/* </LobbyGuard> */}
        </Route>
        <Route exact path="/login">
          {/* <LoginGuard> */}
            <Login/>
          {/* </LoginGuard> */}
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/overview/:sessionPin">
          {/* <SessionGuard> */}
            <ChooseAvatar/>
            <Route path={`${path}/base`}>
              <Overview/>
              <Route path="/exit">
                <Redirect to="/lobby" />
              </Route>
              <Route path="/start">
                <GameRouter base="/game" />
              </Route>
            </Route>
          {/* </SessionGuard> */}
        </Route>
        <Route path="/overview">
          <Redirect to="/lobby" />
        </Route>
        {/* needs some work! */}
        <Route exact path="/big-screen-view:sessionPin">
          <SessionGuard>
            <BigScreenView/>
          </SessionGuard>
        </Route>
        {/* don't know yet if this holds for a pop-up type window */}
        <Route component={Rules} exact path="/rules" />

        {/* have this in every router? */}
        <Route component={Loader} exact path="/loader" />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
