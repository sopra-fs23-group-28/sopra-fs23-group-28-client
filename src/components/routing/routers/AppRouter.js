import {BrowserRouter, Route, Switch} from "react-router-dom";
import BigScreenView from 'components/views/big-screen-view'
import QuestionVoting from 'components/views/question-voting'
import Rules from 'components/views/rules'
import RandomEvent from 'components/views/random-event'
import Overview from 'components/views/overview'
import Lobby from 'components/views/lobby'
import Race from 'components/views/race'
import Loader from 'components/views/loader'
import ChooseAvatar from 'components/views/choose-avatar'
import Login from 'components/views/login'
import Category from 'components/views/category'
import QuestionTrueFalse from 'components/views/question-true-false'
import Question4Options from 'components/views/question4-options'
import PunishmentSliderPlayerSelect from 'components/views/punishment-slider-player-select'
import Difficulty from 'components/views/difficulty'
import Winner from 'components/views/winner'
import QuestionFillBlank from 'components/views/question-fill-blank'

/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={BigScreenView} exact path="/big-screen-view" />
        <Route component={QuestionVoting} exact path="/question-voting" />
        <Route component={Rules} exact path="/rules" />
        <Route component={RandomEvent} exact path="/random-event" />
        <Route component={Overview} exact path="/overview" />
        <Route component={Lobby} exact path="/lobby" />
        <Route component={Race} exact path="/race" />
        <Route component={Loader} exact path="/loader" />
        <Route component={ChooseAvatar} exact path="/choose-avatar" />
        <Route component={Login} exact path="/" />
        <Route component={Category} exact path="/category" />
        <Route
          component={QuestionTrueFalse}
          exact
          path="/question-true-false"
        />
        <Route component={Question4Options} exact path="/question4-options" />
        <Route
          component={PunishmentSliderPlayerSelect}
          exact
          path="/punishment-slider-player-select"
        />
        <Route component={Difficulty} exact path="/difficulty" />
        <Route component={Winner} exact path="/winner" />
        <Route
          component={QuestionFillBlank}
          exact
          path="/question-fill-blank"
        />
      </Switch>
    </BrowserRouter>
  );
};

/*
* Don't forget to export your component!
 */
export default AppRouter;
